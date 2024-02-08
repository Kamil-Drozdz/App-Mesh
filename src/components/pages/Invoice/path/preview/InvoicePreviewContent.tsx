import { Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';

import NavigationCard from '../../NavigationCard';
import PageContainer from '@/common/PageContainer';
import { Button } from '@/UI/Button';
import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';
import InvoiceTemplate from '../../InvoiceTemplate';
import InvoicePDF from '../../InvoicePDF';
import { useInvoice } from '@/store/Invoice';

function InvoicePreviewContent() {
  const { invoice } = useInvoice();
  return (
    <PageContainer>
      <div className='flex space-x-6'>
        <InvoiceTemplate isEditable={false} />
        <NavigationCard>
          <Button variant='ghost' className='border'>
            <PDFDownloadLink
              className='h-full w-full'
              document={<InvoicePDF invoice={invoice} />}
              fileName={`Invoice #${invoice.invoiceDetails.number}`}
            >
              {({ loading }) => (loading ? 'Loading document...' : 'Download')}
            </PDFDownloadLink>
          </Button>

          <Button onClick={print} variant='ghost' className='border'>
            Print
          </Button>
          <Link className='w-full' to={`${BasicRoutes.INVOICE}${SubRoutes.EDIT}`}>
            <Button variant='ghost' className='w-full border'>
              Edit
            </Button>
          </Link>
        </NavigationCard>
      </div>
    </PageContainer>
  );
}

export default InvoicePreviewContent;
