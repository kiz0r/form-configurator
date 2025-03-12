import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useMemo } from 'react';
import { toast } from 'sonner';
import { FIELD_TYPES, useFormConfig } from '@/entities/form-config';
import { FIELD_SCHEMAS } from '../validation';

export function useFormConfigOutputForm() {
  const { configData } = useFormConfig();

  const items = useMemo(() => configData?.items || [], [configData]);

  const schema = useMemo(
    () =>
      z.object(
        Object.fromEntries(
          items.map((field) => [
            field.name,
            FIELD_SCHEMAS[field.type] || z.string().min(1, 'Field is required'),
          ])
        )
      ),
    [items]
  );

  const defaultValues = useMemo(
    () =>
      Object.fromEntries(
        items.map((field) => [
          field.name,
          field.type === FIELD_TYPES.BOOLEAN ? false : '',
        ])
      ),
    [items]
  );

  type FormType = z.infer<typeof schema>;

  const form = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onChange',
  });

  useEffect(() => {
    if (items.length > 0) {
      form.reset(defaultValues);
    }
  }, [items, form, defaultValues]);

  const onSubmit = (data: FormType) => {
    toast.success('Form submitted', {
      description: <pre>{JSON.stringify(data, null, 2)}</pre>,
    });
  };

  const onReset = () => {
    form.reset(defaultValues);
    toast.success('Form reset successfully!');
  };

  return { form, onSubmit, onReset };
}
