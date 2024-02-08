import { z } from 'zod';

export const registerSchema = z.object({
  displayName: z.string().nonempty({ message: "Display Name can't be empty" }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  terms: z.boolean().refine((value) => value === true, { message: 'You must agree to the terms' }),
});
