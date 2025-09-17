interface Props {
  id: string;
  name:string;
  label: string;
  placeholder: string;
  required: boolean;
  className?: string;
  rows?: number;
}

export function TextareaInput({ id, name, label, placeholder, required, className, rows = 4 }: Props) {
  return (
    <div className={`flex flex-col ${className || 'col-span-12'}`}>
      <label htmlFor={id} className="mb-1">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="border border-custom-gray rounded-md p-2"
      />
    </div>
  );
}