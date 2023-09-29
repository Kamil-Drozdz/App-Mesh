import { Separator } from '@/UI/Separator';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/UI/Table';
import CardContainer from '@/common/CardContainer';
import { invoices } from '@/data/pages/invoice/invoiceData';

const PreviewCard = () => {
	const subTotal = invoices.reduce((accumulator, currentValue) => accumulator + currentValue.rate * currentValue.hours, 0);
	const tax = 23;
	const total = (subTotal * (1 + tax / 100)).toFixed(2);
	return (
		<CardContainer className='print:border-none print:shadow-none print:rounded-none md:max-w-[75%] print:max-w-none print:space-y-3 space-y-8'>
			<div className='flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between mb-4'>
				<div className=' pr-8'>
					<div className='text-xl font-bold mb-4'>Name company</div>
					<p>Office 149, 450 South Brand Brooklyn</p>
					<p>San Diego County, CA 91905, USA</p>
					<p>+1 (123) 456 7891, +44 (876) 543 2198</p>
				</div>
				<div>
					<div className='text-2xl font-bold mb-4'>Invoice #342324</div>
					<div className='flex'>
						<p>Date Issued:</p>
						<div className='font-semibold ml-2'> 19 Oct 2019</div>
					</div>
					<div className='flex'>
						<p>Due Date:</p>
						<div className='font-semibold ml-2'>03 Nov 2019</div>
					</div>
				</div>
			</div>
			<Separator />
			<div className='flex flex-col md:flex-row space-y-4 md:space-y-0  justify-between my-4'>
				<div className=' pr-8'>
					<div className='font-medium mb-4'>Invoice To:</div>
					<p className='font-semibold'>Tony Herrera</p>
					<p>Leonard-Garcia and Sons</p>
					<p>5345 Robert Squares Denmark</p>
					<p>(955) 676-1076</p>
					<p>smithtiffany@powers.com</p>
				</div>
				<div>
					<div className='text-2xl font-bold mb-4'>Payment Details:</div>
					<div className='flex'>
						<p>Total Due:</p>
						<div className='font-semibold ml-2'>${total}</div>
					</div>
					<div className='flex'>
						<p>Bank name:</p>
						<div> American Bank</div>
					</div>
					<div className='flex'>
						<p>Country:</p>
						<div> United States</div>
					</div>
					<div className='flex'>
						<p>IBAN:</p>
						<div>ETD95476213874685</div>
					</div>
				</div>
			</div>
			<Separator />
			<Table>
				<TableCaption>A list of your recent invoices.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className='w-1/4'>TASK DESCRIPTION</TableHead>
						<TableHead> RATE</TableHead>
						<TableHead>HOURS</TableHead>
						<TableHead className='text-right'>TOTAL</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{invoices.map((invoice, index) => (
						<TableRow key={index}>
							<TableCell className='font-medium'>{invoice.task}</TableCell>
							<TableCell>{invoice.rate}$</TableCell>
							<TableCell>{invoice.hours}</TableCell>
							<TableCell className='text-right'>{invoice.rate * invoice.hours}$</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className='flex flex-col md:flex-row space-y-4 md:space-y-0  justify-between p-2 mt-6'>
				<div className='flex'>
					<p className=' font-semibold mr-2'>Salesperson: </p>
					<p> Kamil Dróżdż</p>
				</div>
				<div>
					<div className='flex space-x-2 w-full justify-between'>
						<p>SubTotal:</p>
						<div className='font-semibold'> ${subTotal.toFixed(2)}</div>
					</div>
					<div className='flex space-x-2 w-full justify-between'>
						<p>Tax:</p>
						<div className='font-semibold'>{tax}%</div>
					</div>
					<Separator />
					<div className='flex space-x-2 w-full justify-between mt-4'>
						<p>Total:</p>
						<div className='font-semibold'>${total}</div>
					</div>
				</div>
			</div>
			<Separator className='my-4' />
			<div className='flex'>
				<p className='font-semibold'>Note:</p>
				<p> It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!</p>
			</div>
		</CardContainer>
	);
};

export default PreviewCard;
