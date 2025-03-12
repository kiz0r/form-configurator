import { FormConfigButtonSchemaType } from '@/entities/form-config';

export const CONFIG_INPUT_FORM_BUTTONS: FormConfigButtonSchemaType[] = [
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
