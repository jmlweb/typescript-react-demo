// Con unknown nos obligaría a revisar el tipo antes de
// ejecutar cualquier método
const stringify = (value: unknown): string => {
  if (value instanceof Date) {
    return value.toISOString();
  }
  if (Array.isArray(value)) {
    return JSON.stringify(value);
  }

  return String(value);
};

export default stringify;
