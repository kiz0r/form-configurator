import ConfigInputForm from '@/components/ConfigInputForm';
import ConfigOutputForm from '@/components/ConfigOutputForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';

interface ITabConfigItem {
  label: string;
  value: string;
  component: React.FC;
}

const TABS_CONFIG: ITabConfigItem[] = [
  {
    label: 'Config',
    value: 'config',
    component: ConfigInputForm,
  },
  {
    label: 'Result',
    value: 'result',
    component: ConfigOutputForm,
  },
];

const FormGenerator = () => {
  return (
    <Tabs defaultValue={TABS_CONFIG[0].value} className="w-full max-w-[600px]">
      <TabsList className="w-full flex">
        {TABS_CONFIG.map((tab) => (
          <TabsTrigger
            key={`${tab.label}-${tab.value}`}
            className="w-full"
            value={tab.value}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {TABS_CONFIG.map((tab) => (
        <TabsContent key={`${tab.label}-${tab.value}`} value={tab.value}>
          <tab.component />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default FormGenerator;
