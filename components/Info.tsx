import { EXPECTED_FREQUENCY, LOYAL_AFTER } from '../GLOBAL';

const Info = () => {
	return (
		<div className="flex pb-8 space-x-8">
			<h1 className="font-bold mr-8">Service - Haircuts</h1>
			<p className="text-gray-500">Expected Frequency - {EXPECTED_FREQUENCY} weeks</p>
			<p className="text-gray-500">Considered loyal after - {LOYAL_AFTER} visits</p>
		</div>
	);
};

export default Info;
