import { z } from 'zod';
import { FIELD_TYPES } from '../constants';
import type { IFormConfigField } from '../../types';

const fieldTypes = Object.values(FIELD_TYPES);

export const FORM_FIELD_SCHEMA = z.object({
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  type: z.enum(fieldTypes as [IFormConfigField, ...IFormConfigField[]]),
  options: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .optional(),
});

export type FormFieldSchemaType = z.infer<typeof FORM_FIELD_SCHEMA>;
