import type { ChangeEvent } from "react";
import { getGridStyle } from "~/utils/grid";

interface Option {
  value: string;
  label: string;
}

interface Props {
  name: string;
  label: string;
  options: Option[];
  required: boolean;
  className?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
}

export function RadioInput({
  name,
  label,
  options,
  required,
  className,
  value,
  onChange,
  error,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="flex flex-col" style={getGridStyle(className)}>
      <fieldset>
        <legend className="mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </legend>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {options.map((option) => {
            const fieldId = `${name}-${option.value}`;

            return (
              <div key={fieldId} className="flex items-center gap-2">
                <input
                  type="radio"
                  id={fieldId}
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={handleChange}
                  required={required}
                  className="h-4 w-4 border-gray-300"
                />
                <label htmlFor={fieldId}>{option.label}</label>
              </div>
            );
          })}
        </div>
      </fieldset>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
