function validatePostcode(code: string) {
  const num = parseInt(code);
  if (Number.isNaN(num)) {
    throw new Error('Not a number');
  }
  return num >= 1000 && num <= 9999;
}

try {
  const isValid = validatePostcode(usrString);
} catch (err: any) {
  console.log('Failed', err.message);
}