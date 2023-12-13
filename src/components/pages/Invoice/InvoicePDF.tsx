import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { format, parseISO } from 'date-fns';

import { totalValue } from '@/lib/totalValue';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    color: '#1f2937',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
  },
  text: {
    margin: 5,
    fontSize: 12,
    color: '#545c66',
  },
  itemsTable: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  itemRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  itemCell: {
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 25,
    paddingTop: 10,
    borderTop: 1,
    borderTopColor: '#000',
    borderTopStyle: 'solid',
  },
});

const InvoicePDF = ({ invoice }) => {
  const subTotal = totalValue(invoice.invoiceItems.map((item) => item.rate * item.hours));
  const taxAmount = subTotal * (invoice.tax / 100);
  const total = subTotal + taxAmount;

  const parsedDateIssued =
    typeof invoice.invoiceDetails.dateIssued === 'string'
      ? format(parseISO(invoice.invoiceDetails.dateIssued), 'PPP')
      : format(invoice.invoiceDetails.dateIssued, 'PPP');

  const parsedDateDue =
    typeof invoice.invoiceDetails.dueDate === 'string'
      ? format(parseISO(invoice.invoiceDetails.dueDate), 'PPP')
      : format(invoice.invoiceDetails.dueDate, 'PPP');

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>{invoice.companyInfo.name}</Text>
            <Text style={styles.text}>{invoice.companyInfo.address.part1}</Text>
            <Text style={styles.text}>{invoice.companyInfo.address.part2}</Text>
            <Text style={styles.text}>{invoice.companyInfo.contacts}</Text>
          </View>
          <View>
            <Text style={styles.title}>Invoice #{invoice.invoiceDetails.number}</Text>
            <Text style={styles.text}>Date Issued: {parsedDateIssued}</Text>
            <Text style={styles.text}>Due Date: {parsedDateDue}</Text>
          </View>
        </View>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Invoice To:</Text>
            <Text style={styles.text}>{invoice.clientDetails.name}</Text>
            <Text style={styles.text}>{invoice.clientDetails.address}</Text>
            <Text style={styles.text}>{invoice.clientDetails.phone}</Text>
            <Text style={styles.text}>{invoice.clientDetails.email}</Text>
          </View>
          <View>
            <Text style={styles.title}>Payment Details:</Text>
            <Text style={styles.text}>Total Due: ${total.toFixed(2)}</Text>
            <Text style={styles.text}>Method: {invoice.paymentDetails.method}</Text>
            <Text style={styles.text}>Transaction ID: {invoice.paymentDetails.transactionId}</Text>
          </View>
        </View>

        <View style={styles.itemsTable}>
          <View style={styles.itemRow}>
            <Text style={[styles.itemCell, styles.bold, { width: '45%' }]}>TASK DESCRIPTION</Text>
            <Text style={[styles.itemCell, styles.bold, { width: '10%' }]}>RATE</Text>
            <Text style={[styles.itemCell, styles.bold, { width: '20%' }]}>HOURS</Text>
            <Text style={[styles.itemCell, styles.bold, { width: '25%' }]}>TOTAL</Text>
          </View>
          {invoice.invoiceItems.map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <Text style={[styles.itemCell, { width: '45%' }]}>{item.task}</Text>
              <Text style={[styles.itemCell, { width: '10%' }]}>${item.rate}</Text>
              <Text style={[styles.itemCell, { width: '20%' }]}>{item.hours}</Text>
              <Text style={[styles.itemCell, { width: '25%' }]}>${(item.rate * item.hours).toFixed(2)}</Text>
            </View>
          ))}
          <View style={[styles.itemRow, styles.bold]}>
            <Text style={[styles.itemCell, { width: '75%' }]}>SubTotal</Text>
            <Text style={[styles.itemCell, { width: '25%' }]}>${subTotal.toFixed(2)}</Text>
          </View>
          <View style={[styles.itemRow, styles.bold]}>
            <Text style={[styles.itemCell, { width: '75%' }]}>Tax {invoice.tax}%</Text>
            <Text style={[styles.itemCell, { width: '25%' }]}>${taxAmount.toFixed(2)}</Text>
          </View>
          <View style={[styles.itemRow, styles.bold]}>
            <Text style={[styles.itemCell, { width: '75%' }]}>Total</Text>
            <Text style={[styles.itemCell, { width: '25%' }]}>${total.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>{invoice.salesperson}</Text>
          <Text style={styles.text}>{invoice.note}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
