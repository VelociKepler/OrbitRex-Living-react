const InputField = ({
  label,
  id,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) => (
  <div className="mb-5">
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      className="input-form"
    />
  </div>
);

export default InputField;
