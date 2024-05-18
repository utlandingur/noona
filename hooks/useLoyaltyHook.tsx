import { useLoaderData } from '@remix-run/react';
import { listCustomers } from 'api/customers';
import { useEffect, useState } from 'react';
import { loader } from '~/routes/home';
import { classifyCustomers } from '~/utils/classifyCustomers';

const useLoyaltyHook = (type: string) => {
	const { user } = useLoaderData<typeof loader>();

	const [allCustomers, setAllCustomers] = useState<any[]>();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
				setAllCustomers(customers);
			} catch (error) {
				console.error('Error fetching users:', error);
			}
		};

		fetchUsers();
	}, [user]);

	useEffect(() => {
		const fetchUsers = async () => {
			if (!allCustomers) return;
			const classifiedCustomers = classifyCustomers(allCustomers);
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
		};

		fetchUsers();
	}, [type, allCustomers]);

	return customers;
};

export default useLoyaltyHook;
