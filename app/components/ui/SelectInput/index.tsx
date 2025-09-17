import type { ChangeEvent } from "react";
import { getGridStyle } from "~/utils/grid";

interface Option {
  value: string;
  label: string;
}

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  options: Option[];
  className?: string;
  value: string;
  onChange: (name: string, value: string) => void;
}

export function SelectInput({ 
  id, 
  name, 
  label, 
  placeholder, 
  required, 
  options, 
  className,
  value,
  onChange
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="flex flex-col" style={getGridStyle(className)}>
      <label htmlFor={id} className="mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
        className="border border-custom-gray rounded-md p-2"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}