import { z } from 'zod';
import { BUTTON_TYPES, BUTTON_VARIANTS } from '../constants';
import type {
  IFormConfigButtonType,
  IFormConfigButtonVariant,
} from '../../types';

const buttonTypes = Object.values(BUTTON_TYPES);
const buttonVariants = Object.values(BUTTON_VARIANTS);

export const FORM_CONFIG_BUTTON_SCHEMA = z.object({
  type: z.enum(
    buttonTypes as [IFormConfigButtonType, ...IFormConfigButtonType[]]
  ),
  title: z.string(),
  variant: z
    .enum(
      buttonVariants as [
        IFormConfigButtonVariant,
        ...IFormConfigButtonVariant[]
      ]
    )
    .optional(),
});

export type FormConfigButtonSchemaType = z.infer<
  typeof FORM_CONFIG_BUTTON_SCHEMA
>;
