import { z } from 'zod';

export const CONFIG_INPUT_FORM_SCHEMA = z.object({
  config: z.string(),
});

export type ConfigInputFormSchemaType = z.infer<
  typeof CONFIG_INPUT_FORM_SCHEMA
>;
