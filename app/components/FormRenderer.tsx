const toKebabCase = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

interface Field {
  name: string;
  placeholder: string;
  type: "text-input" | "select-input"; // Be specific with types for better safety
  required: boolean;
  options?: { value: string; label: string }[];
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
            <h2 className="text-xl font-semibold mb-6">
              {sectionName}
            </h2>

            {/* Inner loop: Render the fields within this section in a grid */}
            <div className="grid grid-cols-2 gap-8">
              {fieldsInSection.map((field) => {
                const fieldId = toKebabCase(field.name);

                if (field.type === "text-input") {
                  return (
                    <div key={field.name} className="flex flex-col">
                      <label htmlFor={fieldId} className="mb-1">
                        {field.name}
                      </label>
                      <input
                        type="text"
                        id={fieldId}
                        name={fieldId}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="border border-custom-gray rounded-md p-2"
                      />
                    </div>
                  );
                }

                if (field.type === "select-input") {
                    console.log(field);
                  return (
                    <div key={field.name} className="flex flex-col">
                      <label htmlFor={fieldId} className="mb-1">
                        {field.name}
                      </label>
                      <select
                        id={fieldId}
                        name={fieldId}
                        required={field.required}
                        defaultValue=""
                        className="border border-custom-gray rounded-md p-2"
                      >
                        <option value="">
                          {field.placeholder}
                        </option>
                        {/* You would map over field.options here */}
                        <option value="option-1">Option 1</option>
                        <option value="option-2">Option 2</option>
                      </select>
                    </div>
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
