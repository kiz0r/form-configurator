import type { IFormButton } from './form-button.interface';
import type { IField } from './form-field.interface';

export interface IFormConfig {
  title: string;
  items: IField[];
  buttons: IFormButton[];
}
