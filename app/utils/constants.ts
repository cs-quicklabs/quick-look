export const REACT_APP_DOMAIN = 'https://bio.quicklabs.in'
export const QUICKLABS_DOMAIN = 'https://www.quicklabs.in/quick-bio'
export const QUICKLABS_EMAIL = 'admin@quicklabs.in'

export const templateOptions = [
  {
    label: 'Template 1',
    value: '0',
  },
  {
    label: 'Template 2',
    value: '2',
  },
  {
    label: 'Template 3',
    value: '8',
  },
  {
    label: 'Template 4',
    value: '7',
  },
  {
    label: 'Template 5',
    value: '5',
  },
  {
    label: 'Template 6',
    value: '10',
  },
  {
    label: 'Template 7',
    value: '9',
  },
  {
    label: 'Template 8',
    value: '3',
  },
  {
    label: 'Template 9',
    value: '4',
  },
  {
    label: 'Template 10',
    value: '11',
  },
  {
    label: 'Template 11',
    value: '13',
  },
  {
    label: 'Template 12',
    value: '14',
  },
  {
    label: 'Template 13',
    value: '16',
  },
  {
    label: 'Template 14',
    value: '17',
  },
  {
    label: 'Template 15',
    value: '18',
  },
] as const

export const requiredCSVHeaders = ['First Name', 'Last Name', 'Email']
export const CSVHeaders = [...requiredCSVHeaders, 'User Name']
