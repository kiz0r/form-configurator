import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useEffect, useMemo } from 'react';
import { toast } from 'sonner';
import { useFormConfig } from '@/entities/form-config';

export function useFormConfigOutputForm() {
  const { configData } = useFormConfig();

  const items = useMemo(() => configData?.items || [], [configData]);

  const schema = useMemo(
    () =>
      z.object(
        Object.fromEntries(
          items.map((field) => {
            let fieldSchema: z.ZodTypeAny = z
              .string()
              .transform((val) => val.trim());

            switch (field.type) {
              case 'number':
                fieldSchema = z
                  .union([z.string(), z.number()])
                  .transform((val) =>
                    typeof val === 'string' ? Number(val) : val
                  )
                  .refine((val) => !isNaN(val), {
                    message: 'Must be a number',
                  });
                break;
              case 'date':
                fieldSchema = z
                  .string()
                  .refine((val) => !isNaN(Date.parse(val)), {
                    message: 'Invalid date',
                  });
                break;
              case 'checkbox':
                fieldSchema = z.boolean().default(false);
                break;
              case 'radio':
                fieldSchema = z.string().min(1, 'Choose an option');
                break;
              case 'textarea':
              case 'text':
              default:
                fieldSchema = z
                  .string()
                  .min(1, 'Field is required')
                  .refine((val) => val.trim() !== '', 'Field cannot be empty');
                break;
            }

            return [field.name, fieldSchema];
          })
        )
      ),
    [items]
  );

  const defaultValues = useMemo(
    () =>
      Object.fromEntries(
        items.map((field) => [
          field.name,
          field.type === 'checkbox' ? false : '',
        ])
      ),
    [items]
  );

  type FormType = z.infer<typeof schema>;

  const form = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  useEffect(() => {
    if (items.length > 0) {
      form.reset(defaultValues);
    }
  }, [items, form, defaultValues]);

  const onSubmit = (data: FormType) => {
    toast.success('Form Submitted', {
      description: JSON.stringify(data, null, 2),
    });
  };

  return { form, onSubmit };
}
