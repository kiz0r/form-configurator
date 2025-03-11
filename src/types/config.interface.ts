import type { IFormButton } from './form-buttons.interface';
import type { IInput } from './input.interface';

export interface IConfig {
  title: string;
  items: IInput[];
  buttons: IFormButton[];
}
