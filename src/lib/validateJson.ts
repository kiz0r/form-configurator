import { toast } from 'sonner';

export function validateJson(data: string) {
  try {
    return JSON.parse(data);
  } catch {
    toast.error('Error!', {
      description: 'Invalid JSON',
    });
  }
}
