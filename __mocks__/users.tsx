export const invoices = [
	{
		invoice: 'INV001',
		paymentStatus: 'Paid',
		totalAmount: '$250.00',
		paymentMethod: 'Credit Card',
	},
	{
		invoice: 'INV002',
		paymentStatus: 'Pending',
		totalAmount: '$150.00',
		paymentMethod: 'PayPal',
	},
	{
		invoice: 'INV003',
		paymentStatus: 'Unpaid',
		totalAmount: '$350.00',
		paymentMethod: 'Bank Transfer',
	},
	{
		invoice: 'INV004',
		paymentStatus: 'Paid',
		totalAmount: '$450.00',
		paymentMethod: 'Credit Card',
	},
	{
		invoice: 'INV005',
		paymentStatus: 'Paid',
		totalAmount: '$550.00',
		paymentMethod: 'PayPal',
	},
	{
		invoice: 'INV006',
		paymentStatus: 'Pending',
		totalAmount: '$200.00',
		paymentMethod: 'Bank Transfer',
	},
	{
		invoice: 'INV007',
		paymentStatus: 'Unpaid',
		totalAmount: '$300.00',
		paymentMethod: 'Credit Card',
	},
];

export const mockUsers = {
	loyalty: {
		new: [
			{
				name: 'Jane Smith',
				email: 'jane@gmail.com',
				telephone: '123-4567',
				lastVisited: '1st March 2024',
				contactedRecently: 'No',
				totalSpent: '$500',
			},
			{
				name: 'Bob Johnson',
				email: 'bob@gmail.com',
				telephone: '890-1234',
				lastVisited: '2nd March 2024',
				contactedRecently: 'Yes',
				totalSpent: '$600',
			},
			{
				name: 'Alice Williams',
				email: 'alice@gmail.com',
				telephone: '567-8901',
				lastVisited: '3rd March 2024',
				contactedRecently: 'No',
				totalSpent: '$700',
			},
		],
		lost: [
			{
				name: 'Bob Johnson',
				email: 'bob@gmail.com',
				telephone: '890-1234',
				lastVisited: '2nd March 2024',
				contactedRecently: 'Yes',
				totalSpent: '$600',
			},
			{
				name: 'Alice Williams',
				email: 'alice@gmail.com',
				telephone: '567-8901',
				lastVisited: '3rd March 2024',
				contactedRecently: 'No',
				totalSpent: '$700',
			},
		],
		risk: [
			{
				name: 'Bob Johnson',
				email: 'bob@gmail.com',
				telephone: '890-1234',
				lastVisited: '2nd March 2024',
				contactedRecently: 'Yes',
				totalSpent: '$600',
			},
			{
				name: 'Alice Williams',
				email: 'alice@gmail.com',
				telephone: '567-8901',
				lastVisited: '3rd March 2024',
				contactedRecently: 'No',
				totalSpent: '$700',
			},
		],
		loyal: [
			{
				name: 'Bob Johnson',
				email: 'bob@gmail.com',
				telephone: '890-1234',
				lastVisited: '2nd March 2024',
				contactedRecently: 'Yes',
				totalSpent: '$600',
			},
			{
				name: 'Alice Williams',
				email: 'alice@gmail.com',
				telephone: '567-8901',
				lastVisited: '3rd March 2024',
				contactedRecently: 'No',
				totalSpent: '$700',
			},
		],
		dormant: [
			{
				name: 'Bob Johnson',
				email: 'bob@gmail.com',
				telephone: '890-1234',
				lastVisited: '2nd March 2024',
				contactedRecently: 'Yes',
				totalSpent: '$600',
			},
			{
				name: 'Alice Williams',
				email: 'alice@gmail.com',
				telephone: '567-8901',
				lastVisited: '3rd March 2024',
				contactedRecently: 'No',
				totalSpent: '$700',
			},
		],
	},
};
