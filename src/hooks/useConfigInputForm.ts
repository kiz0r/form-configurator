import { useConfig } from '@/context';
import { validateJson } from '@/lib/validateJson';
import {
  CONFIG_INPUT_FORM_SCHEMA,
  ConfigInputFormSchemaType,
} from '@/validationSchemes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import placeholder from '../components/ConfigInputForm/placeholder.json';

export function useConfigInputForm(defaultValues: ConfigInputFormSchemaType) {
  const { setConfigData } = useConfig();

  const form = useForm<ConfigInputFormSchemaType>({
    defaultValues,
    mode: 'onBlur',
    resolver: zodResolver(CONFIG_INPUT_FORM_SCHEMA),
  });

  const onReset = () => {
    form.reset({ config: JSON.stringify(placeholder, null, 2) });
  };

  const onSubmit = (data: ConfigInputFormSchemaType) => {
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
