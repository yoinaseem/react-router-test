import type { FormField } from "~/types";

export const validateField = (field: FormField, value: any): string | null => {

  // Helper function to check if field is empty
  const isEmpty = (val: any) => {
    if (val === null || val === undefined) return true;
    if (typeof val === 'string') return val.trim() === '';
    if (Array.isArray(val)) return val.length === 0;
    return false;
  };

  // If the field is not required and the value is empty, it's valid
  if (!field.is_required && isEmpty(value)) {
    return null;
  }

  // If the field is required and the value is empty
  if (field.is_required && isEmpty(value)) {
    return `${field.label} is required`;
  }

  // Type-specific validation
  switch (field.type) {
    case 'email':
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Please enter a valid email address';
      }
      break;

    case 'tel':
      if (value && !/^[\d\s\-+()]+$/.test(value)) {
        return 'Please enter a valid phone number';
      }
      break;

    case 'url':
      try {
        if (value) {
          // The URL constructor will throw if the URL is invalid
          new URL(value);
        }
      } catch (e) {
        return 'Please enter a valid URL';
      }
      break;

    case 'number':
      if (value && isNaN(Number(value))) {
        return 'Please enter a valid number';
      }
      break;

    // case 'checkbox':

    default:
      break;
  }

  return null;
};