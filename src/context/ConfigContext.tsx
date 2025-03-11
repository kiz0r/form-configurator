import { createContext, useContext, useState, ReactNode } from 'react';
import type { IConfig } from '@/types';
interface ConfigContextType {
  configData: IConfig | null;
  setConfigData: (data: IConfig) => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};

interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
  const [configData, setConfigData] = useState<IConfig | null>(null);

  const values = {
    configData,
    setConfigData,
  };

  return (
    <ConfigContext.Provider value={values}>{children}</ConfigContext.Provider>
  );
};
