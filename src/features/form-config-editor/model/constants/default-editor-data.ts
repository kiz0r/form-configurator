import { FormConfigSchemaType } from '@/entities/form-config';

export const DEFAULT_CONFIG_EDITOR_DATA: FormConfigSchemaType = {
  title: 'Demo form',
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
      type: 'enum',
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
      label: 'Cover Letter',
      type: 'textarea',
      placeholder: 'Enter your cover letter here',
      name: 'coverLetter',
    },
    {
      label: 'I agree with the terms and conditions',
      type: 'boolean',
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
