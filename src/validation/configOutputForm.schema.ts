import { z } from 'zod';

export const FORM_ITEM_SCHEMA = z.object({
  label: z.string(),
  type: z.enum(['number', 'text', 'date', 'checkbox', 'textarea', 'radio']),
  placeholder: z.string().optional(),
  name: z.string().min(1),
  options: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .optional(),
});

export const FORM_BUTTON_SCHEMA = z.object({
  title: z.string(),
  type: z.enum(['submit', 'reset', 'cancel']),
  variant: z.enum(['default', 'ghost']).optional(),
});

export const CONFIG_OUTPUT_FORM_SCHEMA = z.object({
  title: z.string(),
  items: z.array(FORM_ITEM_SCHEMA),
  buttons: z.array(FORM_BUTTON_SCHEMA),
});

export type FormItemSchemaType = z.infer<typeof FORM_ITEM_SCHEMA>;

export type ConfigOutputFormSchemaType = z.infer<
  typeof CONFIG_OUTPUT_FORM_SCHEMA
>;
