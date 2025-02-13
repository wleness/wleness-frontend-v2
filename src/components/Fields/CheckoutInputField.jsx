import React from "react";

export default function CheckoutInputField({
  name,
  type,
  value,
  onchange,
  placeholder,
}) {
  return (
    <label htmlFor={name} className="form-input !flex !w-full justify-between">
      <input
        type={type}
        className="block w-full outline-none"
        placeholder={placeholder}
        value={value}
        name={name}
        id={name}
        onChange={onchange}
      />
    </label>
  );
}
