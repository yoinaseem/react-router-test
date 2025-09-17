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
        className="border border-custom-gray rounded-md p-2"
      />
    </div>
  );
}
