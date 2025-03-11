import type { IFormButton } from '@/entities/form-config';

export const CONFIG_INPUT_FORM_BUTTONS: IFormButton[] = [
  {
    title: 'Clear',
    type: 'reset',
    variant: 'ghost',
  },
  {
    title: 'Generate',
    type: 'submit',
    variant: 'default',
  },
];
