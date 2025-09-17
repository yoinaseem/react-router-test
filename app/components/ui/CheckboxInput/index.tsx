interface Option {
  value: string;
  label: string;
}

interface Props {
  name: string;
  label: string;
  options: Option[];
  className?: string;
}

export function CheckboxInput({ name, label, options, className }: Props) {
  return (
    <div className={`flex flex-col ${className || 'col-span-6'}`}>
      <fieldset>
        {/* The 'legend' acts as the main label for the group */}
        <legend className="mb-2">{label}</legend>

        <div className="flex justify-between">
          {/* Map over the options to create each checkbox */}
          {options.map((option) => {
            const fieldId = `${name}-${option.value}`;

            return (
              <div key={fieldId} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={fieldId}
                  // The name ends with [] to group selections into an array on submit
                  name={`${name}[]`}
                  value={option.value}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor={fieldId}>
                  {option.label}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}