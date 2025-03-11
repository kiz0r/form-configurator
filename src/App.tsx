import { Toaster } from '@/shared/ui';
import { FormConfigProvider } from '@/entities/form-config';
import { FormConfigurator } from './widgets/form-configurator';

function App() {
  return (
    <FormConfigProvider>
      <FormConfigurator />
      <Toaster />
    </FormConfigProvider>
  );
}

export default App;
