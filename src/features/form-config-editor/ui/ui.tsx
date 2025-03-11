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
} from '@/shared/ui';
import { useFormConfigEditorForm } from '../model';
import { useEffect, useMemo } from 'react';
import { useFormConfig, FormButtons } from '@/entities/form-config';
import { DEFAULT_CONFIG_EDITOR_DATA } from '../model';
import { CONFIG_INPUT_FORM_BUTTONS } from '../model/constants/editor-buttons-data';

const FormConfigEditor = () => {
  const { configData } = useFormConfig();

  const defaultConfig = useMemo(
    () => JSON.stringify(configData || DEFAULT_CONFIG_EDITOR_DATA, null, 2),
    [configData]
  );

  const { form, onSubmit, onReset } = useFormConfigEditorForm({
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
                      rows={15}
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

export default FormConfigEditor;
