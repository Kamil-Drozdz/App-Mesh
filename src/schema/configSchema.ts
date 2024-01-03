import { z } from 'zod';

export const step1Schema = z.object({
  nameApp: z.string().nonempty({ message: "Name app can't be empty" }),
  stripeKey: z.string().regex(/^pk_live_[0-9a-zA-Z]{24}$/, {
    message: 'Invalid Stripe publishable key format.',
  }),
  apiUrl: z.string().url({ message: 'Invalid URL' }).or(z.literal('')),
});

export const step2Schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  port: z.number().min(100).max(65535, { message: 'Port must be between 0 and 65535' }),
  service: z.string().nonempty({ message: "Service can't be empty" }),
  host: z.string().nonempty({ message: "Host can't be empty" }),
});
