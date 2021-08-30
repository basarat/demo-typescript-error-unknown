type Attributes = {
  color?: string,
  font?: string,
  [data: string]: string | undefined,
};

const classic = {
  color: 'red',
  font: 'Helvetica',
  'data-name': 'classic',
  'name': 'classic', // Invalid
};