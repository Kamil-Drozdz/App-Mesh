import { create } from 'zustand';

import { useLocalStorage } from '@/hooks/reusable/useLocalStorage';

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
  rate: number | null;
  hours: number | null;
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

export const emptyTemplateInvoice = {
  companyInfo: {
    name: '',
    address: {
      part1: '',
      part2: '',
    },
    contacts: '',
  },
  invoiceDetails: {
    number: 'INV-0001',
    dateIssued: new Date(),
    dueDate: new Date(),
  },
  clientDetails: {
    name: '',
    address: '',
    phone: '',
    email: '',
  },
  paymentDetails: { method: '', transactionId: 'xxxx-xxxx-xxxx-1234' },
  invoiceItems: [
    {
      task: 'App Development',
      rate: 50,
      hours: 200,
    },
    {
      task: 'UI Kit Design',
      rate: 60,
      hours: 150,
    },
  ],
  salesperson: '',
  tax: 20,
  note: '',
};

export const useInvoice = create<InvoiceState>()((set) => ({
  invoice: getItem() || emptyTemplateInvoice,
  setInvoice: (updater) => {
    if (typeof updater === 'function') {
      set((state) => ({ invoice: updater(state.invoice) }));
    } else {
      set({ invoice: updater });
    }
  },
}));
