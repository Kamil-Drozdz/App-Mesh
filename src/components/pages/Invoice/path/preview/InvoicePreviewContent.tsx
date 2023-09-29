import NavigationCard from './content/NavigationCard';
import PreviewCard from './content/PreviewCard';
import PageContainer from '@/common/PageContainer';

const InvoicePreviewContent = () => {
	const handlePrint = () => {};

	return (
		<PageContainer>
			<div className='flex space-x-6'>
				<PreviewCard />
				<NavigationCard handlePrint={handlePrint} />
			</div>
		</PageContainer>
	);
};

export default InvoicePreviewContent;
