export interface IFormButton {
  title: string;
  type: 'submit' | 'reset' | 'button';
  variant?: 'default' | 'destructive' | 'ghost';
}
