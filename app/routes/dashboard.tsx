import CampaignSection from 'components/CampaignSection';
import Info from 'components/Info';
import LoyaltySection from 'components/LoyalitySection';
import { loader } from './home';
import { useLoaderData } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { listCustomers } from 'api/customers';
import { getCompany } from 'api/companies';
import { Button } from '@mui/material';

export default function ButtonUsage() {
	const { user } = useLoaderData<typeof loader>();

	const [customers, setCustomers] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const customers = await listCustomers(
				user.companyId,
				{},
				{
					headers: {
						Authorization: `Bearer ${user.token.accessToken}`,
					},
				}
			);
		};
		fetchData();
	}, [user]);

	return (
		<div className="p-8">
			<Info />
			<CampaignSection />
			<LoyaltySection customers={customers} />
		</div>
	);
}
