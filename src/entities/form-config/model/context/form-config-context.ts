import { createContext } from 'react';
import { IFormConfig } from '../../types';

interface FormConfigContextType {
  configData: IFormConfig | null;
  setConfigData: (data: IFormConfig) => void;
}

export const FormConfigContext = createContext<
  FormConfigContextType | undefined
>(undefined);
