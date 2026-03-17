import { z } from 'zod';

export const B2BValidation = z.object({
  company: z.string().min(1, 'Company name is required'),
  email: z.string().email('Invalid email address'),

  salutation: z.enum(['Mr', 'Mrs', 'Ms', 'Dr', 'Prof'] as const, {
    message: 'Invalid salutation',
  }),

  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  phone: z.string().max(15),

  rm: z.enum(['abc', 'xyz'] as const, {
    message: 'Invalid RM',
  }),

  leadSource: z.enum(['abc', 'xyz'] as const, {
    message: 'Invalid lead source',
  }),
  country: z.string().min(1, 'country is required'),
  city: z.string().min(1, 'city is required'),
  area: z.string().min(1, 'area is required'),
  pin: z.number().min(1, 'pin is required'),
  address: z.string().min(1, 'address is required'),

  remarks: z.string().min(1, 'Remarks is required'),
});

export const B2BUpdateValidation = B2BValidation.partial();

export type TB2B = z.infer<typeof B2BValidation>;
