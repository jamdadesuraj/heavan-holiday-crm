import { z } from 'zod';
export const B2CValidation = z.object({
  email: z.string().email('Invalid email address'),
  phone: z.string().max(15, 'Phone too long'),
  salutation: z.enum(['Mr', 'Mrs', 'Ms', 'Dr', 'Prof']),
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  leadSource: z.enum(['Website', 'Referral', 'Social Media', 'Email', 'Other']),
  leadStage: z.enum(['New', 'Contacted', 'Qualified', 'Lost', 'Converted']),
});

export type TB2C = z.infer<typeof B2CValidation>;
