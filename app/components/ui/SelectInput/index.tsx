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
}

export function SelectInput({ id, name, label, placeholder, required, options, className }: Props) {
  return (
    <div className={`flex flex-col ${className || 'col-span-6'}`}>
      <label htmlFor={id} className="mb-1">
        {label}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className="border border-custom-gray rounded-md p-2"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {/* Map over the passed-in options array */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}