import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui';
import { FORM_CONFIGURATOR_CONTENT } from '../model';

const FormConfigurator = () => {
  return (
    <Tabs
      defaultValue={FORM_CONFIGURATOR_CONTENT[0].value}
      className="w-full max-w-[600px]"
    >
      <TabsList className="w-full flex">
        {FORM_CONFIGURATOR_CONTENT.map(({ label, value }) => (
          <TabsTrigger
            key={`${label}-${value}`}
            className="w-full"
            value={value}
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {FORM_CONFIGURATOR_CONTENT.map(({ label, value, Component }) => (
        <TabsContent key={`${label}-${value}`} value={value}>
          <Component />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default FormConfigurator;
