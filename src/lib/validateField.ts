import { z, ZodType } from 'zod';

export const validateField = <T>(
  schema: ZodType<T>,
  value: T,
  setError: (errors) => void
): boolean => { 
  try {
    schema.parse(value);
    setError({});
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {};
      error.errors.forEach((err) => {
        if (err.path.length > 0) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      setError(fieldErrors);
      return false;
    }
    throw error;
  }
};
