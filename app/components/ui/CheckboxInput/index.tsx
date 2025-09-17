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
  className?: string;
  value: string[];
  onChange: (name: string, value: string[]) => void;
  required?: boolean;
}

export function CheckboxInput({ 
  name, 
  label, 
  options, 
  className,
  value,
  onChange,
  required = false
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const optionValue = e.target.value;
    const isChecked = e.target.checked;
    
    let newValue: string[];
    if (isChecked) {
      newValue = value.includes(optionValue) ? value : [...value, optionValue];
    } else {
      newValue = value.filter(v => v !== optionValue);
    }
    
    onChange(name, newValue);
  };

  return (
    <div className="flex flex-col" style={getGridStyle(className)}>
      <fieldset>
        <legend className="mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </legend>

        <div className="flex justify-between">
          {options.map((option) => {
            const fieldId = `${name}-${option.value}`;

            return (
              <div key={fieldId} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={fieldId}
                  name={`${name}[]`}
                  value={option.value}
                  checked={value.includes(option.value)}
                  onChange={handleChange}
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