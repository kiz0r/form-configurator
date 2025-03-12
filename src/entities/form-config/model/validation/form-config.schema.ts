import { z } from 'zod';
import { FORM_FIELD_SCHEMA } from './form-field.schema';
import { FORM_CONFIG_BUTTON_SCHEMA } from './form-button.schema';

export const FORM_CONFIG_SCHEMA = z.object({
  title: z.string(),
  items: z.array(FORM_FIELD_SCHEMA),
  buttons: z.array(FORM_CONFIG_BUTTON_SCHEMA),
});

export type FormConfigSchemaType = z.infer<typeof FORM_CONFIG_SCHEMA>;
