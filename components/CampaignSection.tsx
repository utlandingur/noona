import CampaignVariableSelector from './CampaignVariableSelector';
const ContainerSection = () => {
	return (
		<div className="flex gap-8">
			<CampaignVariableSelector type="NEW" />
			<CampaignVariableSelector type="RISK" />
			<CampaignVariableSelector type="LOST" />
		</div>
	);
};

export default ContainerSection;
