import LoyaltyTable from './LoyaltyTable';

const LoyaltySection = () => {
	return (
		<div className="pt-8">
			<h2 className="text-4xl font-bold pb-4">Loyalty Status</h2>
			<LoyaltyTable type={'NEW'} />
			<LoyaltyTable type={'RISK'} />
			<LoyaltyTable type={'LOST'} />
			<LoyaltyTable type={'LOYAL'} />
			<LoyaltyTable type={'DORMANT'} />
		</div>
	);
};

export default LoyaltySection;
