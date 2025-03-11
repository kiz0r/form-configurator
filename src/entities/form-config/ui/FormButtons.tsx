import type { FC } from 'react';
import { Button } from '@/shared/ui';
import type { IFormButton } from '../types';

interface FormButtonsProps {
  items: IFormButton[];
}

const FormButtons: FC<FormButtonsProps> = ({ items }) => {
  return (
    <div className="w-full flex justify-end gap-5">
      {items.map(({ title, type, variant }, idx) => (
        <Button key={`${title}-${idx}`} type={type} size="lg" variant={variant}>
          {title}
        </Button>
      ))}
    </div>
  );
};

export default FormButtons;
