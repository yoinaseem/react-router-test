import { TextInput } from "./ui/TextInput";
import { TextareaInput } from "./ui/TextareaInput";
import { NumberInput } from "./ui/NumberInput";
import { SelectInput } from "./ui/SelectInput";
import { EmailInput } from "./ui/EmailInput";
import { WebsiteInput } from "./ui/WebsiteInput";
import { TelInput } from "./ui/TelInput";
import { RadioInput } from "./ui/RadioInput";
import { CheckboxInput } from "./ui/CheckboxInput";
import type { FormSection } from "~/types";

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
  return (
    <div className="mb-60">
      <form className="flex flex-col gap-8">
        {sections.map((section) => (
          <fieldset key={section.id}>
            <h2 className="text-xl font-semibold mb-6">{section.title}</h2>

            <div className="grid grid-cols-12 gap-8">
              {section.fields.map((field) => {
                const fieldId = toKebabCase(field.name);
                const value = formState[field.name] || "";

                if (field.type === "text") {
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
                }
                if (field.type === "textarea") {
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
                }
                if (field.type === "number") {
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
                }
                if (field.type === "email") {
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
                }

                if (field.type === "tel") {
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
                }

                if (field.type === "url") {
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
                }

                if (field.type === "select") {
                  const transformedOptions = (field.options || []).map(
                    (opt) => ({
                      value: opt,
                      label: opt,
                    })
                  );
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
                }

                if (field.type === "radio") {
                  const transformedOptions = (field.options || []).map(
                    (opt) => ({
                      value: opt,
                      label: opt,
                    })
                  );

                  return (
                    <RadioInput
                      key={field.id}
                      name={field.name}
                      label={field.label}
                      options={transformedOptions}
                      required={field.is_required}
                      className={field.class_name}
                      value={value}
                      onChange={onInputChange}
                    />
                  );
                }

                if (field.type === "checkbox") {
                  const transformedOptions = (field.options || []).map(
                    (opt) => ({
                      value: opt,
                      label: opt,
                    })
                  );

                  return (
                    <CheckboxInput
                      key={field.id}
                      name={field.name}
                      label={field.label}
                      options={transformedOptions}
                      required={field.is_required}
                      className={field.class_name}
                      value={value || []}
                      onChange={onInputChange}
                    />
                  );
                }

                return null;
              })}
            </div>
          </fieldset>
        ))}
      </form>
    </div>
  );
}
