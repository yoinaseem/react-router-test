import type { ChangeEvent } from "react";
import { getGridStyle } from "~/utils/grid";

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  className?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
}

export function TelInput({
  id,
  name,
  label,
  placeholder,
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
      <label htmlFor={id} className="mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type="tel"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        pattern="[0-9]{7,15}"
        title="Please enter a valid phone number (7 to 15 digits)"
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
