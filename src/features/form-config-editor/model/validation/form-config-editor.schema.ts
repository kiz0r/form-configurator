import { z } from 'zod';

export const FORM_CONFIG_EDITOR_SCHEMA = z.object({
  config: z.string(),
});

export type FormConfigEditorSchemaType = z.infer<
  typeof FORM_CONFIG_EDITOR_SCHEMA
>;
