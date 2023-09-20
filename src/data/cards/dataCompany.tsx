import { getRandomHexColor } from '@/lib/entities/generateRandomColor';
import { IconSize } from '@/lib/entities/iconSize';
import { faker } from '@faker-js/faker';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineDesktop, AiOutlineMobile, AiOutlineLaptop, AiOutlineShoppingCart, AiOutlineCode } from 'react-icons/ai';

export const labels = ['COMPANY', 'CATEGORY', 'VIEWS', 'REVENUE', 'SALES'];

export type CompanyData = {
	icon: ReactNode;
	photo: string;
	name: string;
	email: string;
	category: string;
	views: string;
	revenue: string;
	sales: string;
	color: string;
};

const generateRandomIcon: IconType = () => {
	const icons = [<AiOutlineDesktop size={IconSize.medium} />, <AiOutlineMobile size={IconSize.medium} />, <AiOutlineLaptop size={IconSize.medium} />, <AiOutlineShoppingCart size={IconSize.medium} />, <AiOutlineCode size={IconSize.medium} />];
	const randomIndex = Math.floor(Math.random() * icons.length);
	return icons[randomIndex];
};

export const generateCompanyData = (): CompanyData => {
	const company: CompanyData = {
		photo: faker.image.avatarLegacy(),
		name: faker.company.name(),
		email: faker.internet.email(),
		category: faker.commerce.department(),
		views: `${faker.number.int({ min: 1000, max: 999999 })}k`,
		revenue: `$${faker.number.int({ min: 100, max: 999 })}M`,
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
