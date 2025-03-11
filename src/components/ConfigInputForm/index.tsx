import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  Textarea,
} from '../ui';
import type { IFormButton } from '@/types';
import FormButtons from '../FormButtons';
import placeholder from './placeholder.json';
import { useConfigInputForm } from '@/hooks';
import { useEffect, useMemo } from 'react';
import { useConfig } from '@/context';

const CONFIG_INPUT_FORM_BUTTONS: IFormButton[] = [
  {
    title: 'Clear',
    type: 'reset',
    variant: 'ghost',
  },
  {
    title: 'Generate',
    type: 'submit',
    variant: 'default',
  },
];

const ConfigInputForm = () => {
  const { configData } = useConfig();

  const defaultConfig = useMemo(
    () => JSON.stringify(configData || placeholder, null, 2),
    [configData]
  );

  const { form, onSubmit, onReset } = useConfigInputForm({
    config: defaultConfig,
  });

  useEffect(() => {
    if (configData) {
      form.setValue('config', JSON.stringify(configData, null, 2));
    }
  }, [configData, form]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Config your own form</CardTitle>
        <CardDescription>
          Start editing the JSON file to generate the form
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-5"
            onSubmit={form.handleSubmit(onSubmit)}
            onReset={onReset}
          >
            <FormField
              control={form.control}
              name="config"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="font-mono text-sm"
                      rows={10}
                      placeholder="Enter your JSON config here"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormButtons items={CONFIG_INPUT_FORM_BUTTONS} />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ConfigInputForm;
