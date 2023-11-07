import { initialInvoice } from '@/data/pages/invoice/invoiceData';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { create } from 'zustand';

interface Address {
  part1: string;
  part2: string;
}

interface CompanyInfo {
  name: string;
  address: Address;
  contacts: string;
}

interface InvoiceDetails {
  number: string;
  dateIssued: Date;
  dueDate: Date;
}

interface ClientDetails {
  name: string;
  address: string;
  phone: string;
  email: string;
}

interface PaymentDetails {
  method: string;
  transactionId: string;
}

export interface InvoiceItem {
  task: string;
  rate: number;
  hours: number;
}

export interface Invoice {
  companyInfo: CompanyInfo;
  invoiceDetails: InvoiceDetails;
  clientDetails: ClientDetails;
  paymentDetails: PaymentDetails;
  invoiceItems: InvoiceItem[];
  salesperson: string;
  tax: number;
  note: string;
}
interface InvoiceState {
  invoice: Invoice;
  setInvoice: (updater: Invoice | ((state: Invoice) => Invoice)) => void;
}

const { getItem } = useLocalStorage('savedInvoice');

export const useInvoice = create<InvoiceState>()((set) => ({
  invoice: getItem() || initialInvoice,
  setInvoice: (updater) => {
    if (typeof updater === 'function') {
      set((state) => ({ invoice: updater(state.invoice) }));
    } else {
      set({ invoice: updater });
    }
  },
}));
