import type { IInput } from '@/types';
import type { FC } from 'react';
import {
  RadioGroup,
  RadioGroupItem,
  Checkbox,
  FormItem,
  Input,
  Label,
  Textarea,
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
} from '../ui';
import { useConfigOutputForm } from '@/hooks';

const FieldIdentifier: FC<IInput> = ({
  label,
  type,
  name,
  placeholder: ph,
  options,
}) => {
  const placeholder = ph || undefined;
  const { form } = useConfigOutputForm();

  switch (type) {
    case 'number':
    case 'text':
    case 'date':
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Input type={type} placeholder={placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case 'textarea':
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Textarea placeholder={placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case 'checkbox':
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...field}
                />
              </FormControl>
              <FormLabel>{label}</FormLabel>
            </FormItem>
          )}
        />
      );
    case 'radio':
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <FormLabel htmlFor={name}>{label}</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="ml-4 flex flex-col gap-2"
                >
                  {options?.map(({ value, label }, idx) => (
                    <FormItem className="flex gap-2" key={`${value}-${idx}`}>
                      <FormControl>
                        <RadioGroupItem value={value} />
                      </FormControl>
                      <Label>{label}</Label>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
      );
    default:
      return null;
  }
};

export default FieldIdentifier;
