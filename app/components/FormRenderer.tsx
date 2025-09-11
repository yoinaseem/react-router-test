import { TextInput } from "./ui/TextInput";
import { SelectInput } from "./ui/SelectInput";

const toKebabCase = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

interface Field {
  name: string;
  placeholder: string;
  type: "text-input" | "select-input";
  required: boolean;
  options?: { value: string; label: string }[];
  className?: string;
}

// Define the shape of the props your component will receive
interface FormRendererProps {
  groupedFields: Record<string, Field[]>;
}

export function FormRenderer({ groupedFields }: FormRendererProps) {
  return (
    // mb to make sure form isnt hidden by sticky footer
    <div className="mb-60">
      <form className="flex flex-col gap-8">
        {/* Outer loop: Iterate over each section */}
        {Object.entries(groupedFields).map(([sectionName, fieldsInSection]) => (
          <fieldset key={sectionName}>
            {/* Render the section title */}
            <h2 className="text-xl font-semibold mb-6">{sectionName}</h2>

            {/* Inner loop: Render the fields within this section in a grid */}
            <div className="grid grid-cols-12 gap-8">
              {fieldsInSection.map((field) => {
                const fieldId = toKebabCase(field.name);

                if (field.type === "text-input") {
                  return (
                    <TextInput
                      key={field.name}
                      id={fieldId}
                      name={fieldId}
                      label={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      className={field.className}
                    />
                  );
                }

                if (field.type === "select-input") {
                  console.log(field);
                  return (
                    <SelectInput
                      key={field.name}
                      id={fieldId}
                      name={fieldId}
                      label={field.name}
                      placeholder={field.placeholder}
                      options={field.options || []}
                      required={field.required}
                      className={field.className}
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
