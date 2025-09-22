import type { ChangeEvent } from "react";
import { getGridStyle } from "~/utils/grid";

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  className?: string;
  rows?: number;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
}

export function TextareaInput({
  id,
  name,
  label,
  placeholder,
  required,
  className,
  rows = 4,
  value,
  onChange,
  error,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="flex flex-col" style={getGridStyle(className)}>
      <label htmlFor={id} className="mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
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
