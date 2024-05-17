import { EXPECTED_FREQUENCY } from 'GLOBAL';

export interface customerClassification {
	new: any[];
	loyal: any[];
	atRisk: any[];
	dormant: any[];
	lost: any[];
}

export function classifyCustomers(customers: any[]) {
	let classification: customerClassification = {
		new: [],
		loyal: [],
		atRisk: [],
		dormant: [],
		lost: [],
	};
	customers.forEach((customer) => {
		const lastEventDate = new Date(customer.lastEvent);
		const today = new Date();
		const daysSinceLastEvent = Math.round((today.getMilliseconds() - lastEventDate.getMilliseconds()) / (1000 * 60 * 60 * 24));
		if (daysSinceLastEvent < EXPECTED_FREQUENCY * 1) {
			if (customer.event_count < 3) {
				classification.new.push(customer);
			} else {
				classification.loyal.push(customer);
			}
		} else if (daysSinceLastEvent < EXPECTED_FREQUENCY * 2) {
			classification.atRisk.push(customer);
		} else if (daysSinceLastEvent < EXPECTED_FREQUENCY * 3) {
			classification.lost.push(customer);
		} else {
			classification.dormant.push(customer);
		}
	});
	return classification;
}
