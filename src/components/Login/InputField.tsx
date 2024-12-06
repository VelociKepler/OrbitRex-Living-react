import React from "react";

const InputField = ({
  label,
  id,
  type = "text",
  placeholder,
  required = false,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}) => (
  <div className="mb-5">
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      className="input-form"
      onChange={onChange}
    />
  </div>
);

export default InputField;
