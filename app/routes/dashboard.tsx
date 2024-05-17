import { Container } from '@mui/material';
import CampaignSection from 'components/CampaignSection';
import Info from 'components/Info';
import LoyaltySection from 'components/LoyalitySection';

export default function ButtonUsage() {
	return (
		<Container maxWidth="lg">
			<Info />
			<CampaignSection />
			<LoyaltySection />
		</Container>
	);
}
