import React from "react";

const EditInput = ({ id, label, type, placeholder, handleChange, value }) => {
  return (
    <div className="flex flex-col flex-1 gap-1">
      <label htmlFor={label} className="font-semibold">
        {label}
      </label>
      <input
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        id={id}
        className="w-full h-full p-3 rounded-xl bg-[#f1f2f3]"
      />
    </div>
  );
};

export default EditInput;
