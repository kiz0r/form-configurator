import { BUTTON_TYPES, BUTTON_VARIANTS } from '../model';

export type IFormConfigButtonType =
  (typeof BUTTON_TYPES)[keyof typeof BUTTON_TYPES];

export type IFormConfigButtonVariant =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
