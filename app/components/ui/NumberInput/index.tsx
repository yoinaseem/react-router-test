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
}

export function NumberInput({ id, name, label, placeholder, required, className, min, max, step }: Props) {
  return (
    <div className={`flex flex-col ${className || 'col-span-6'}`}>
      <label htmlFor={id} className="mb-1">
        {label}
      </label>
      <input
        type="number"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        step={step}
        className="border border-custom-gray rounded-md p-2"
      />
    </div>
  );
}