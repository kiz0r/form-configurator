import { FIELD_TYPES, IFormConfigField } from '@/entities/form-config';
import { z } from 'zod';

export const FIELD_SCHEMAS: Record<IFormConfigField, z.ZodTypeAny> = {
  [FIELD_TYPES.NUMBER]: z
    .union([z.string(), z.number()])
    .transform((val) => (typeof val === 'string' ? Number(val) : val))
    .refine((val) => !isNaN(val), { message: 'Must be a number' }),

  [FIELD_TYPES.DATE]: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date' }),

  [FIELD_TYPES.BOOLEAN]: z.boolean().default(false),

  [FIELD_TYPES.ENUM]: z.string().min(1, 'Choose an option'),

  [FIELD_TYPES.TEXTAREA]: z.string().min(1, 'Field is required'),
  [FIELD_TYPES.TEXT]: z.string().min(1, 'Field is required'),
};
