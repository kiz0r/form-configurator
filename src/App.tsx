import { Toaster } from '@/shared/ui';
import { FormConfigProvider } from '@/entities/form-config';
import { FormConfigurator } from './widgets/form-configurator';

function App() {
  return (
    <FormConfigProvider>
      <main className="w-full py-5 px-3 flex flex-col items-center">
        <FormConfigurator />
      </main>
      <Toaster />
    </FormConfigProvider>
  );
}

export default App;
