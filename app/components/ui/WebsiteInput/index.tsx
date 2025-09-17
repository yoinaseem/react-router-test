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
}

export function WebsiteInput({ 
  id, 
  name, 
  label, 
  placeholder, 
  required, 
  className,
  value,
  onChange
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
        type="url"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className="border border-custom-gray rounded-md p-2"
      />
    </div>
  );
}