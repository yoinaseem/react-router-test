import type { ChangeEvent } from "react";
import { getGridStyle } from "~/utils/grid";

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  value: string | number;
  onChange: (name: string, value: number) => void;
  error?: string;
}

export function NumberInput({
  id,
  name,
  label,
  placeholder,
  required,
  className,
  min,
  max,
  step,
  value,
  onChange,
  error,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numValue = e.target.value ? Number(e.target.value) : "";
    onChange(name, numValue);
  };

  return (
    <div className="flex flex-col" style={getGridStyle(className)}>
      <label htmlFor={id} className="mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type="number"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        step={step}
        className={`border rounded-md p-2 ${
          error 
            ? 'border-red-500' 
            : 'border-custom-gray'
        }`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
