type Attributes = {
  color?: string,
  font?: string,
  [data: `data-${string}`]: string | undefined,
};

const classic: Attributes = {
  color: 'red',
  font: 'Helvetica',
  'data-name': 'classic',
};