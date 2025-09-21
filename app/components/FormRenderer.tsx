import { TextInput } from "./ui/TextInput";
import { TextareaInput } from "./ui/TextareaInput";
import { NumberInput } from "./ui/NumberInput";
import { SelectInput } from "./ui/SelectInput";
import { EmailInput } from "./ui/EmailInput";
import { WebsiteInput } from "./ui/WebsiteInput";
import { TelInput } from "./ui/TelInput";
import { RadioInput } from "./ui/RadioInput";
import { CheckboxInput } from "./ui/CheckboxInput";
import type { FormSection, FormField } from "~/types";
import { evaluateFieldVisibility } from "~/utils/formDependencies";
import { useMemo } from "react";

const toKebabCase = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

interface FormRendererProps {
  sections: FormSection[];
  onInputChange: (name: string, value: any) => void;
  formState: Record<string, any>;
}

export function FormRenderer({
  sections,
  onInputChange,
  formState,
}: FormRendererProps) {
  console.log(formState);
  const renderField = (field: FormField) => {
    // Check if field should be visible based on dependencies
    const isVisible = evaluateFieldVisibility(field, sections, formState);
    if (!isVisible) return null;

    const fieldId = toKebabCase(field.name);
    const value = formState[field.name] || "";

    switch (field.type) {
      case "text":
        return (
          <TextInput
            key={field.id}
            id={fieldId}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder || ""}
            required={field.is_required}
            className={field.class_name}
            value={value}
            onChange={onInputChange}
          />
        );

      case "textarea":
        return (
          <TextareaInput
            key={field.id}
            id={fieldId}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder || ""}
            required={field.is_required}
            className={field.class_name}
            value={value}
            onChange={onInputChange}
          />
        );

      case "number":
        return (
          <NumberInput
            key={field.id}
            id={fieldId}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder || ""}
            required={field.is_required}
            className={field.class_name}
            value={value}
            onChange={onInputChange}
          />
        );

      case "email":
        return (
          <EmailInput
            key={field.id}
            id={fieldId}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder || ""}
            required={field.is_required}
            className={field.class_name}
            value={value}
            onChange={onInputChange}
          />
        );

      case "tel":
        return (
          <TelInput
            key={field.id}
            id={fieldId}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder || ""}
            required={field.is_required}
            className={field.class_name}
            value={value}
            onChange={onInputChange}
          />
        );

      case "url":
        return (
          <WebsiteInput
            key={field.id}
            id={fieldId}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder || ""}
            required={field.is_required}
            className={field.class_name}
            value={value}
            onChange={onInputChange}
          />
        );

      case "select":
        const transformedOptions = (field.options || []).map((opt) => ({
          value: opt,
          label: opt,
        }));
        return (
          <SelectInput
            key={field.id}
            id={fieldId}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder || ""}
            options={transformedOptions}
            required={field.is_required}
            className={field.class_name}
            value={value}
            onChange={onInputChange}
          />
        );

      case "radio":
        const radioOptions = (field.options || []).map((opt) => ({
          value: opt,
          label: opt,
        }));
        return (
          <RadioInput
            key={field.id}
            name={field.name}
            label={field.label}
            options={radioOptions}
            required={field.is_required}
            className={field.class_name}
            value={value}
            onChange={onInputChange}
          />
        );

      case "checkbox":
        const checkboxOptions = (field.options || []).map((opt) => ({
          value: opt,
          label: opt,
        }));
        return (
          <CheckboxInput
            key={field.id}
            name={field.name}
            label={field.label}
            options={checkboxOptions}
            required={field.is_required}
            className={field.class_name}
            value={value || []}
            onChange={onInputChange}
          />
        );

      default:
        console.warn(`Unsupported field type: ${field.type}`);
        return null;
    }
  };

  const visibleFields = useMemo(() => {
    return sections.map((section) => ({
      ...section,
      fields: section.fields.filter((field) =>
        evaluateFieldVisibility(field, sections, formState)
      ),
    }));
  }, [sections, formState]);

  return (
    <div className="mb-60">
      <form className="flex flex-col gap-8">
        {visibleFields.map((section) => (
          <fieldset key={section.id}>
            <h2 className="text-xl font-semibold mb-6">{section.title}</h2>

            <div className="grid grid-cols-12 gap-8">
              {section.fields.map(renderField)}
            </div>
          </fieldset>
        ))}
      </form>
    </div>
  );
}
