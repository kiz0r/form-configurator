import { createContext } from 'react';
import type { FormConfigSchemaType } from '../validation';

interface FormConfigContextType {
  configData: FormConfigSchemaType | null;
  setConfigData: (data: FormConfigSchemaType) => void;
}

export const FormConfigContext = createContext<
  FormConfigContextType | undefined
>(undefined);
