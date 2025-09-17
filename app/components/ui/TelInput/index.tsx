interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  className?: string;
}

export function TelInput({ id, name, label, placeholder, required, className }: Props) {
  return (
    <div className={`flex flex-col ${className || 'col-span-6'}`}>
      <label htmlFor={id} className="mb-1">
        {label}
      </label>
      <input
        type="tel"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        // Optional: A pattern for basic phone number format validation
        pattern="[0-9]{7,15}"
        title="Please enter a valid phone number (7 to 15 digits)"
        className="border border-custom-gray rounded-md p-2"
      />
    </div>
  );
}