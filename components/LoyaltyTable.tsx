import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '~/@/components/ui/table';
import { invoices } from '../__mocks__/users';
import { loyaltyType } from 'GLOBAL';

interface LoyaltyTableProps {
	type: loyaltyType;
}

function LoyaltyTable({ type }: LoyaltyTableProps) {
	const amendedType = `${type[0]}${type.slice(1).toLocaleLowerCase()}`;

	return (
		<>
			<h3 className="text-2xl font-bold pb-4">{amendedType} users</h3>
			<Table>
				<TableCaption>A list of your {amendedType} users.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Name</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Telephone</TableHead>
						<TableHead>Last visited</TableHead>
						<TableHead className="text-right">Total spent</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{invoices.map((invoice) => (
						<TableRow key={invoice.invoice}>
							<TableCell className="font-medium">{invoice.invoice}</TableCell>
							<TableCell>{invoice.paymentStatus}</TableCell>
							<TableCell>{invoice.paymentMethod}</TableCell>
							<TableCell>{invoice.paymentMethod}</TableCell>
							<TableCell className="text-right">{invoice.totalAmount}</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total</TableCell>
						<TableCell className="text-right">$2,500.00</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</>
	);
}

export default LoyaltyTable;
