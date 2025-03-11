import { useContext } from 'react';
import { FormConfigContext } from '../context';

export function useFormConfig() {
  const context = useContext(FormConfigContext);
  if (!context) {
    throw new Error('useFormConfig must be used within a FormConfigProvider');
  }
  return context;
}
