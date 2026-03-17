import { z } from 'zod';

export const CorporateLeadValidation = z.object({
  company: z.string().min(1, 'Company name is required'),
  email: z.string().email('Invalid email address'),

  salutation: z.enum(['Mr', 'Mrs', 'Ms', 'Dr', 'Prof'] as const, {
    message: 'Invalid salutation',
  }),

  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  phone: z.string().min(10, 'Phone must be at least 10 digits').max(15),

  rm: z.enum(['abc', 'xyz'] as const, {
    message: 'Invalid RM',
  }),

  leadSource: z.enum(['abc', 'xyz'] as const, {
    message: 'Invalid lead source',
  }),

  country: z.string().min(1, 'Country is required'),
  city: z.string().min(1, 'City is required'),
  area: z.string().min(1, 'Area is required'),

  pin: z.number().min(100000, 'Invalid pin').max(999999, 'Invalid pin'),

  address: z.string().min(1, 'Address is required'),
  remarks: z.string().min(1, 'Remarks is required'),
});

export const CorporateLeadUpdateValidation = CorporateLeadValidation.partial();

export type TCorporateLead = z.infer<typeof CorporateLeadValidation>;
