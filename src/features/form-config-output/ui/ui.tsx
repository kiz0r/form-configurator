import { useFormConfigOutputForm } from '../model';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
  Input,
  Textarea,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Label,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from '@/shared/ui';
import { NoConfigData, useFormConfig } from '@/entities/form-config';
import FormButtons from '@/components/FormButtons';

const FormConfigOutput = () => {
  const { configData } = useFormConfig();
  const { form, onSubmit } = useFormConfigOutputForm();

  if (!configData) {
    return <NoConfigData />;
  }

  const { title, items, buttons } = configData;

  return (
    <Card className="min-h-[300px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-5">
              {items.map(
                ({ label, type, name, placeholder, options }, index) => (
                  <FormField
                    key={index}
                    control={form.control}
                    name={name}
                    render={({ field }) => {
                      switch (type) {
                        case 'number':
                        case 'text':
                        case 'date':
                          return (
                            <FormItem>
                              <FormLabel>{label}</FormLabel>
                              <FormControl>
                                <Input
                                  type={type}
                                  placeholder={placeholder}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        case 'textarea':
                          return (
                            <FormItem>
                              <FormLabel>{label}</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder={placeholder}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        case 'checkbox':
                          return (
                            <FormItem className="flex items-center gap-2">
                              <FormControl>
                                <Checkbox
                                  checked={Boolean(field.value)}
                                  onCheckedChange={field.onChange}
                                  {...field}
                                />
                              </FormControl>
                              <FormLabel>{label}</FormLabel>
                            </FormItem>
                          );
                        case 'radio':
                          return (
                            <FormItem className="flex flex-col gap-2">
                              <FormLabel htmlFor={name}>{label}</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  value={field.value || ''}
                                  className="ml-4 flex flex-col gap-2"
                                >
                                  {options?.map(({ value, label }, idx) => (
                                    <FormItem
                                      className="flex gap-2"
                                      key={`${value}-${idx}`}
                                    >
                                      <FormControl>
                                        <RadioGroupItem value={value} />
                                      </FormControl>
                                      <Label>{label}</Label>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                            </FormItem>
                          );
                        default:
                          return <></>;
                      }
                    }}
                  />
                )
              )}
            </div>
            <FormButtons items={buttons} />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FormConfigOutput;
