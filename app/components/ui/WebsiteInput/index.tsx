interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  className?: string;
}

export function WebsiteInput({ id, name, label, placeholder, required, className }: Props) {
  return (
    <div className={`flex flex-col ${className || 'col-span-6'}`}>
      <label htmlFor={id} className="mb-1">
        {label}
      </label>
      <input
        type="url"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        className="border border-custom-gray rounded-md p-2"
      />
    </div>
  );
}