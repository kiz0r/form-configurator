import { type ReactNode, type FC, useState } from 'react';

import { FormConfigContext } from './form-config-context';
import type { FormConfigSchemaType } from '../validation';

export interface ConfigProviderProps {
  children: ReactNode;
}

export const FormConfigProvider: FC<ConfigProviderProps> = ({ children }) => {
  const [configData, setConfigData] = useState<FormConfigSchemaType | null>(
    null
  );

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
