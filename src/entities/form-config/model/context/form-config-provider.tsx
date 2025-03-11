import { type ReactNode, type FC, useState } from 'react';
import { IFormConfig } from '../../types';
import { FormConfigContext } from './form-config-context';

export interface ConfigProviderProps {
  children: ReactNode;
}

export const FormConfigProvider: FC<ConfigProviderProps> = ({ children }) => {
  const [configData, setConfigData] = useState<IFormConfig | null>(null);

  const values = {
    configData,
    setConfigData,
  };

  return (
    <FormConfigContext.Provider value={values}>
      {children}
    </FormConfigContext.Provider>
  );
};
