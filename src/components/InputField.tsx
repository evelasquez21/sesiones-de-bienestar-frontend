import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBeforeInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  status?: boolean | null;
  spanText?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = "text", value, onChange, onBeforeInput, placeholder, status = null, spanText }) => {
  const baseClassName = "px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition";

  const statusClassName =
  status === true
    ? "border-green-300 focus:ring-green-500"
    : status === false 
      ? "border-red-300 focus:ring-red-500"
      : "border-slate-300 focus:ring-blue-500"

  const messageClassName =
  status === true
    ? "text-sm text-green-500"
    : "text-sm text-red-500"

  return (
    <div className="flex flex-col w-full mb-4">
      <label className="mb-1 text-sm font-medium text-slate-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${baseClassName} ${statusClassName}`}
        onBeforeInput={onBeforeInput}
        required
      />
      {<span className={messageClassName}>{spanText}</span>}
    </div>
  );
};

export default InputField;
