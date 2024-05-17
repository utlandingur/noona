import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '~/@/components/ui/table';
import { invoices } from '../__mocks__/users';
import { loyaltyType } from 'GLOBAL';
import { useEffect, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/@/components/ui/accordion';

interface LoyaltyTableProps {
	type: loyaltyType;
}

function LoyaltyTable({ type }: LoyaltyTableProps) {
	const [users, setUsers] = useState<any>(undefined);

	const amendedType = `${type[0]}${type.slice(1).toLocaleLowerCase()}`;

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				// const users = await getusers(type);
				const users = invoices;
				setUsers(users);
			} catch (error) {
				console.log(error);
			}
		};
		fetchUsers();
	});

	return (
		<>
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger>
						<h3 className="text-2xl font-bold pb-4">{amendedType} users</h3>
					</AccordionTrigger>
					<AccordionContent>
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
							{users ? (
								<>
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
											<TableCell colSpan={4}>Total users</TableCell>
											<TableCell className="text-right">{users.length}</TableCell>
										</TableRow>
									</TableFooter>
								</>
							) : (
								<TableBody>
									<TableRow>
										<TableCell colSpan={5}>No users found</TableCell>
									</TableRow>
								</TableBody>
							)}
						</Table>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	);
}

export default LoyaltyTable;
