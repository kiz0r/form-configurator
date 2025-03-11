export type FieldType =
  | 'number'
  | 'text'
  | 'date'
  | 'checkbox'
  | 'textarea'
  | 'radio';

interface IOption {
  label: string;
  value: string;
}

export interface IInput {
  label: string;
  name: string;
  type: FieldType;
  placeholder?: string;
  options?: IOption[];
}
