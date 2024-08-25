import React from "react";

const Input = ({ id, label, type, placeholder }) => {
  return (
    <div className="flex flex-col flex-1 gap-1">
      <label htmlFor={label} className="font-semibold">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className="w-full h-full p-3 rounded-xl bg-[#f1f2f3]"
      />
    </div>
  );
};

export default Input;
