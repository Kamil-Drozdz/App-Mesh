import { Separator } from '@/UI/Separator';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/UI/Table';
import CardContainer from '@/common/CardContainer';
import LabelRow from '@/common/LabelRow';
import { invoices } from '@/data/pages/invoice/invoiceData';

const PreviewCard = () => {
	const subTotal = invoices.reduce((accumulator, currentValue) => accumulator + currentValue.rate * currentValue.hours, 0);
	const tax = 23;
	const total = (subTotal * (1 + tax / 100)).toFixed(2);
	return (
		<CardContainer className='print:border-none print:shadow-none print:rounded-none md:max-w-[75%] print:max-w-none print:space-y-3 space-y-8'>
			<div className='flex flex-col md:flex-row print:flex-row space-y-4 md:space-y-0 justify-between mb-4'>
				<div className=' pr-8'>
					<div className='text-xl font-bold mb-4'>Name company</div>
					<p>Office 149, 450 South Brand Brooklyn</p>
					<p>San Diego County, CA 91905, USA</p>
					<p>+1 (123) 456 7891, +44 (876) 543 2198</p>
				</div>
				<div>
					<div className='text-2xl font-bold mb-4'>Invoice #342324</div>
					<LabelRow label='Date Issued:' className='space-x-2' value='19 Oct 2019' />
					<LabelRow label='Due Date:' className='space-x-2' value='03 Nov 2019' />
				</div>
			</div>
			<Separator />
			<div className='flex flex-col md:flex-row print:flex-row space-y-4 md:space-y-0  justify-between my-4'>
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
					<LabelRow label='Total Due:' className='space-x-2' value={`$ ${total}`} />
					<LabelRow label='Bank name:' className='space-x-2' value='American Bank' />
					<LabelRow label='Country:' className='space-x-2' value='United States' />
					<LabelRow label='IBAN:' className='space-x-2' value='ETD95476213874685' />
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
			<div className='flex flex-col md:flex-row print:flex-row space-y-4 md:space-y-0  justify-between p-2 mt-6'>
				<LabelRow label='Salesperson:' className='space-x-2' value='Kamil Dróżdż' />
				<div>
					<LabelRow label='SubTotal:' className='space-x-2 w-full justify-between' value={`$ ${subTotal.toFixed(2)}`} />
					<LabelRow label='Tax:' className='space-x-2 w-full justify-between' value={`${tax}%`} />
					<Separator />
					<LabelRow label='Total:' className='space-x-2 w-full justify-between' value={`$ ${total}`} />
				</div>
			</div>
			<Separator className='my-4' />
			<LabelRow label='Note:' className='space-x-2' value='It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!' />
		</CardContainer>
	);
};

export default PreviewCard;
