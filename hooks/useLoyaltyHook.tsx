import { useEffect, useState } from 'react';

type LoyaltyUserInfo = {
	name: string;
	email: string;
	telephone: string;
	lastVisited: string;
	contactedRecently: string;
	totalSpent: string;
};

const useLoyaltyHook = (type: string) => {
	const [users, setUsers] = useState<LoyaltyUserInfo[]>();

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch(`/api/loyalty/${type}`);
				const data = await response.json();
				setUsers(data);
			} catch (error) {
				console.error('Error fetching users:', error);
			}
		};

		fetchUsers();
	}, [type]);

	return users;
};

export default useLoyaltyHook;
