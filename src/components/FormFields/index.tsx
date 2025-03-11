import type { IInput } from '@/types';
import { FC } from 'react';
import FieldIdentifier from './FieldIdentifier';

interface FormFieldsProps {
  items: IInput[];
}

const FormFields: FC<FormFieldsProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-5">
      {items.map((item, index) => (
        <FieldIdentifier key={index} {...item} />
      ))}
    </div>
  );
};

export default FormFields;
