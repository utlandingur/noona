import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '~/@/components/ui/table';
import { loyaltyType } from 'GLOBAL';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/@/components/ui/accordion';
import useLoyaltyHook from 'hooks/useLoyaltyHook';

interface LoyaltyTableProps {
	type: loyaltyType;
}

function LoyaltyTable({ type }: LoyaltyTableProps) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const amendedType = `${type[0]}${type.slice(1).toLocaleLowerCase()}`;

	const users = useLoyaltyHook(type);

	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>
					<div className="flex flex-row pb-4">
						<h3 className="text-2xl">{amendedType} users</h3>
						<p className="text-2xl ml-8">{users?.length}</p>
					</div>
				</AccordionTrigger>
				<AccordionContent>
					<p>adad</p>
					<Table>
						<TableCaption>A list of your {amendedType} users.</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">Name</TableHead>
								<TableHead>Email</TableHead>
								<TableHead>Telephone</TableHead>
								<TableHead>Last visited</TableHead>
								<TableHead>Contacted recently</TableHead>
								<TableHead className="text-right">Total spent</TableHead>
							</TableRow>
						</TableHeader>
						{users ? <TableContent users={users} /> : <EmptyTableContent />}
					</Table>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

interface TableContentProps {
	users: {
		name: string;
		phone_number: string;
		last_event: string;
		event_count: number;
		last_employee: string;
	}[];
}

const TableContent = ({ users }: TableContentProps) => {
	return users ? (
		<>
			<TableBody>
				{users.map((user, index) => (
					<TableRow key={index}>
						<TableCell>{user?.name}</TableCell>
						<TableCell>{user?.phone_number}</TableCell>
						<TableCell>{user?.last_event}</TableCell>
						<TableCell>{user?.event_count}</TableCell>
						<TableCell>{user?.last_employee}</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={5}>Total users</TableCell>
					<TableCell className="text-right">{users.length}</TableCell>
				</TableRow>
			</TableFooter>
		</>
	) : null;
};

const EmptyTableContent = () => {
	return (
		<TableBody>
			<TableRow>
				<TableCell colSpan={5}>No users found</TableCell>
			</TableRow>
		</TableBody>
	);
};

export default LoyaltyTable;
