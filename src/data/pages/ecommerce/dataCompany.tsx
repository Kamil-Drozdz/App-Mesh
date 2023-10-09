import { getRandomHexColor } from '@/lib/generateRandomColor';
import { IconSize } from '@/lib/iconSize';
import { faker } from '@faker-js/faker';
import { useTranslation } from 'react-i18next';
import { AiOutlineDesktop, AiOutlineMobile, AiOutlineLaptop, AiOutlineShoppingCart, AiOutlineCode } from 'react-icons/ai';

export const DataCompany = () => {
	const { t } = useTranslation();
	const labels = [t('Company'), t('Category'), t('Views'), t('Revenue'), t('Sales')];
	return labels;
};

export type CompanyData = {
	icon: JSX.Element;
	photo: string;
	name: string;
	email: string;
	category: string;
	views: string;
	revenue: string;
	sales: string;
	color: string;
};

const iconComponents = [AiOutlineDesktop, AiOutlineMobile, AiOutlineLaptop, AiOutlineShoppingCart, AiOutlineCode];

export const generateRandomIcon = () => {
	const randomIndex = Math.floor(Math.random() * iconComponents.length);
	const IconComponent = iconComponents[randomIndex];
	return <IconComponent size={IconSize.medium} />;
};

export const generateCompanyData = (): CompanyData => {
	const company: CompanyData = {
		photo: faker.image.avatarLegacy(),
		name: faker.company.name(),
		email: faker.internet.email(),
		category: faker.commerce.department(),
		views: `${faker.number.int({ min: 10, max: 99 })}k`,
		revenue: `$${faker.number.int({ min: 10, max: 99 })}M`,
		sales: `${faker.number.int({ min: 1, max: 99 })}%`,
		color: getRandomHexColor(),
		icon: generateRandomIcon(),
	};
	return company;
};

export const generateData = <T,>(count: number, generator: () => T): T[] => {
	const data: T[] = [];
	for (let i = 0; i < count; i++) {
		data.push(generator());
	}
	return data;
};
