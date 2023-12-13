import { AiOutlineCreditCard } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';

import { IconSize } from '@/lib/enums/iconSize';

export const stepperHeader = [
  { name: 'Cart', description: 'Your Cart items', icon: <FiShoppingCart size={IconSize.basic} /> },
  { name: 'Address', description: 'Enter Your Address', icon: <BiHomeAlt size={IconSize.basic} /> },
  { name: 'Payment', description: 'Select Payment Method', icon: <AiOutlineCreditCard size={IconSize.basic} /> },
];
