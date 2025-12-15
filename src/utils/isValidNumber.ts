export function isValidNumber(value: unknown): boolean {
  if (typeof value === 'number') {
    return !isNaN(value);
  }

  if (typeof value === 'string' && value.trim() !== '') {
    return !isNaN(Number(value));
  }

  return false;
}
