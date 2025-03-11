import { validateJson } from '@/shared/lib';
import {
  FORM_CONFIG_EDITOR_SCHEMA,
  type FormConfigEditorSchemaType,
} from '../validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useFormConfig } from '@/entities/form-config';
import { DEFAULT_CONFIG_EDITOR_DATA } from '../constants';

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
    form.reset({ config: JSON.stringify(DEFAULT_CONFIG_EDITOR_DATA, null, 2) });
  };

  const onSubmit = (data: FormConfigEditorSchemaType) => {
    const configObj = validateJson(data.config);

    if (!configObj) {
      return;
    }

    setConfigData(configObj);
    toast.success('The form has been generated!');
  };

  return {
    form,
    onSubmit,
    onReset,
  };
}
