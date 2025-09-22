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
  error?: string;
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
  onChange,
  error,
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
        className={`border rounded-md p-2 ${
          error ? "border-red-500" : "border-custom-gray"
        }`}
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
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
