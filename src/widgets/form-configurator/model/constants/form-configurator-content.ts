import { FormConfigOutput } from '@/features/form-config-output';
import { FormConfigEditor } from '@/features/form-config-editor';
import type { ITabItem } from '@/shared/types';

export const FORM_CONFIGURATOR_CONTENT: ITabItem[] = [
  {
    label: 'Config editor',
    value: 'config-editor',
    Component: FormConfigEditor,
  },
  {
    label: 'Result',
    value: 'result',
    Component: FormConfigOutput,
  },
];
