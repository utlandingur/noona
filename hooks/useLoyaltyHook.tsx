import { useLoaderData } from '@remix-run/react';
import { listCustomers } from 'api/customers';
import { useEffect, useState } from 'react';
import { loader } from '~/routes/home';
import { classifyCustomers, customerClassification } from '~/utils/classifyCustomers';

type LoyaltyUserInfo = {
	name: string;
	email: string;
	telephone: string;
	lastVisited: string;
	contactedRecently: string;
	totalSpent: string;
};

const useLoyaltyHook = (type: string) => {
	const { user } = useLoaderData<typeof loader>();

	const [customers, setCustomers] = useState<any[]>();

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const { data: customers } = await listCustomers(
					user.companyId,
					{},
					{
						headers: {
							Authorization: `Bearer ${user.token.accessToken}`,
						},
					}
				);
				const classifiedCustomers = classifyCustomers(customers);
				if (type == 'NEW') {
					setCustomers(classifiedCustomers.new);
				} else if (type == 'RISK') {
					setCustomers(classifiedCustomers.atRisk);
				} else if (type == 'LOST') {
					setCustomers(classifiedCustomers.lost);
				} else if (type == 'DORMANT') {
					setCustomers(classifiedCustomers.dormant);
				} else {
					setCustomers(classifiedCustomers.loyal);
				}
			} catch (error) {
				console.error('Error fetching users:', error);
			}
		};

		fetchUsers();
	}, [type]);

	return customers;
};

export default useLoyaltyHook;
