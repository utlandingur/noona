import { loyaltyType } from 'GLOBAL';
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/@/components/ui/card';
import { Input } from '~/@/components/ui/input';
import { Label } from '~/@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '~/@/components/ui/select';
import { Switch } from '~/@/components/ui/switch';

interface CampaignVariableSelectorProps {
	type: loyaltyType;
}
function CampaignVariableSelector({ type }: CampaignVariableSelectorProps) {
	const [discountValue, setDiscountValue] = useState('0.3');
	const [messageValue, setMessageValue] = useState('');

	const handleDiscountChange = (value: string) => {
		setDiscountValue(value);
	};

	const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMessageValue(event.target.value);
	};

	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>
					{type[0]}
					{type.slice(1).toLocaleLowerCase()} campaign
				</CardTitle>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="discount">Discount</Label>
							<Select onValueChange={handleDiscountChange} value={discountValue}>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Select discount" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="0.1">10%</SelectItem>
										<SelectItem value="0.2">20%</SelectItem>
										<SelectItem value="0.3">30%</SelectItem>
										<SelectItem value="0.4">40%</SelectItem>
										<SelectItem value="0.5">50%</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Message to send</Label>
							<Input id="name" placeholder="" value={messageValue} onChange={handleMessageChange} />
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<div className="flex items-center space-x-2">
					<Switch id="airplane-mode" />
					<Label htmlFor="airplane-mode">Activated</Label>
				</div>
			</CardFooter>
		</Card>
	);
}

export default CampaignVariableSelector;
