import { Stack } from '@mui/material';
import CampaignVariableSelector from './CampaignVariableSelector';
const ContainerSection = () => {
	return (
		<>
			<Stack direction={'row'} spacing={10}>
				<CampaignVariableSelector type="NEW" />
				<CampaignVariableSelector type="RISK" />
				<CampaignVariableSelector type="LOST" />
			</Stack>
		</>
	);
};

export default ContainerSection;
