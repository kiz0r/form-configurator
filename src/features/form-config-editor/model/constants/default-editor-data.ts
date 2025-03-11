import { IFormConfig } from '@/entities/form-config';

export const DEFAULT_CONFIG_EDITOR_DATA: IFormConfig = {
  title: 'Demo form title',
  items: [
    {
      label: 'Your full name',
      type: 'text',
      placeholder: 'John Dee',
      name: 'fullName',
    },
    {
      label: 'Date',
      type: 'date',
      name: 'date',
    },
    {
      label: 'Years of experience',
      type: 'number',
      placeholder: 'Enter the number of years of experience',
      name: 'experience',
    },
    {
      type: 'radio',
      name: 'meetingType',
      label: 'Choose the type of meeting',
      options: [
        {
          label: 'At office',
          value: 'offline',
        },
        {
          label: 'Online',
          value: 'online',
        },
      ],
    },
    {
      label: 'Your message',
      type: 'textarea',
      placeholder: 'Enter your message',
      name: 'message',
    },
    {
      label: 'I agree with the terms and conditions',
      type: 'checkbox',
      name: 'terms',
    },
  ],
  buttons: [
    {
      type: 'reset',
      title: 'Cancel',
      variant: 'ghost',
    },
    {
      type: 'submit',
      title: 'Send',
    },
  ],
};
