import { faker } from '@faker-js/faker';

import { generateRandomIcon } from './dataCompany';

export interface TransactionData {
  icon: JSX.Element;
  name: string;
  revenue: string;
}

export const generateTransactionData = () => {
  const transactionData: TransactionData = {
    icon: generateRandomIcon(),
    name: faker.commerce.department(),
    revenue: ` ${faker.number.int({ min: 300, max: 999 })}$`,
  };
  return transactionData;
};
