import type { IInput, IFormButton } from '@/shared/types';

export interface IFormConfig {
  title: string;
  items: IInput[];
  buttons: IFormButton[];
}
