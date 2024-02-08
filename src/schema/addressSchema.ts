import { z } from 'zod';

export const addressSchema = z.object({
  fullName: z.string().nonempty({ message: "Full Name can't be empty" }),
  address: z.string().nonempty({ message: "Address can't be empty" }),
  city: z.string().nonempty({ message: "City can't be empty" }),
  state: z.string().nonempty({ message: "State can't be empty" }),
  zipCode: z.string().refine((value) => /^\d{5}$/.test(value), {
    message: 'Zip Code must be a 5-digit number',
  }),
  phone: z.string().refine((value) => /^\d{9}$/.test(value), {
    message: 'Phone number must be a 9-digit number',
  }),
});
