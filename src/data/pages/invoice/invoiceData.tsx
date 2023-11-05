export const initialInvoice = {
  companyInfo: {
    name: 'Company name',
    address: {
      part1: 'Office 149, 450 South Brand Brooklyn',
      part2: 'San Diego County, CA 91905, USA',
    },
    contacts: '+1 (123) 456 7891, +44 (876) 543 2198',
  },
  invoiceDetails: {
    number: 'INV-0001',
    dateIssued: new Date(),
    dueDate: new Date(),
  },
  clientDetails: {
    name: 'Client Company',
    address: 'Client Address Line 1\nClient Address Line 2',
    phone: '+1 (987) 654 3210',
    email: 'contact@clientcompany.com',
  },
  paymentDetails: { method: 'Credit Card', transactionId: 'xxxx-xxxx-xxxx-1234' },
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
  salesperson: 'Sales Representative Name',
  tax: 20,
  note: 'Thank you for your business!',
};
