import { generateRandomIcon } from './dataCompany';
import { faker } from '@faker-js/faker';

export const generateTransactionData = () => {
	const transactionData = {
		icon: generateRandomIcon(),
		name: faker.commerce.department(),
		revenue: ` ${faker.number.int({ min: 300, max: 999 })}$`,
	};
	return transactionData;
};
