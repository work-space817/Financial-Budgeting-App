import { FC, InputHTMLAttributes, useState } from "react";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: "text" | "password" | "email" | "number";
  field: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputGroupProps> = ({
  label,
  type = "text",
  field,
  onChange,
  value,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={field} className="form-label">
        {label}
      </label>
      <input
        type={type}
        id={field}
        name={field}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
