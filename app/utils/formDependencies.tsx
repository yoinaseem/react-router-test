import type { FormSection, FormField } from "~/types";

export const findFieldById = (
  fieldId: number,
  sections: FormSection[]
): FormField | null => {
  for (const section of sections) {
    const field = section.fields.find((f) => f.id === fieldId);
    if (field) return field;
  }
  return null;
};

export const evaluateFieldVisibility = (
  field: FormField,
  sections: FormSection[],
  formState: Record<string, any>
): boolean => {
  // No dependency - always visible
  if (!field.depends_on_field_id) return true;

  // Find the dependent field
  const dependentField = findFieldById(field.depends_on_field_id, sections);
  if (!dependentField) return true; // Fallback if dependent field not found

  // Get the current value of the dependent field
  const dependentValue = formState[dependentField.name];

  // Handle different field types
  if (dependentField.type === "checkbox") {
    // For multiselect checkboxes, check if the dependency value is in the selected array
    return (
      Array.isArray(dependentValue) &&
      dependentValue.includes(field.depends_on_value)
    );
  }

  // For other field types 
  return dependentValue === field.depends_on_value;
};
