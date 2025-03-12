import { toast } from 'sonner';
import {
  FORM_CONFIG_SCHEMA,
  type FormConfigSchemaType,
} from '@/entities/form-config';

export function validateConfigJson(data: string) {
  try {
    const parsedData: FormConfigSchemaType = JSON.parse(data);

    const { items, buttons, title } = parsedData;

    const errors: string[] = [];
    if (!title || !title.trim()) errors.push('Title cannot be empty.');
    if (!Array.isArray(items) || !items.length)
      errors.push('Items cannot be empty.');
    if (!Array.isArray(buttons) || !buttons.length)
      errors.push('Buttons cannot be empty.');

    if (errors.length > 0) {
      toast.error('Error!', {
        description: errors.join(' '),
      });
      return null;
    }

    const validation = FORM_CONFIG_SCHEMA.safeParse(parsedData);
    if (!validation.success) {
      toast.error('Error!', {
        description: 'The JSON schema does not match the expected format.',
      });
      return null;
    }

    return validation.data;
  } catch {
    toast.error('Error!', {
      description: 'Invalid JSON format. Please check the syntax.',
    });
    return null;
  }
}
