import {
  FORM_CONFIG_EDITOR_SCHEMA,
  type FormConfigEditorSchemaType,
} from '../validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useFormConfig } from '@/entities/form-config';
import { validateConfigJson } from '../lib';

export function useFormConfigEditorForm(
  defaultValues: FormConfigEditorSchemaType
) {
  const { setConfigData } = useFormConfig();

  const form = useForm<FormConfigEditorSchemaType>({
    defaultValues,
    mode: 'onBlur',
    resolver: zodResolver(FORM_CONFIG_EDITOR_SCHEMA),
  });

  const onReset = () => {
    form.reset({ config: '' });
  };

  const onSubmit = (data: FormConfigEditorSchemaType) => {
    const validatedConfig = validateConfigJson(data.config);

    if (!validatedConfig) return;

    setConfigData(validatedConfig);
    toast.success('The form has been generated!');
  };

  return {
    form,
    onSubmit,
    onReset,
  };
}
