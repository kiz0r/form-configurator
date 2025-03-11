import { FormGenerator } from '@/widgets';
import { Toaster } from './components/ui';
import { ConfigProvider } from './context';

function App() {
  return (
    <ConfigProvider>
      <FormGenerator />
      <Toaster />
    </ConfigProvider>
  );
}

export default App;
