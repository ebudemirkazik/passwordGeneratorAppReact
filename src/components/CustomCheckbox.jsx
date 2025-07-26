import { BsCheckSquareFill, BsSquare } from "react-icons/bs";
import { useState } from "react";

function CustomCheckbox({ label, checked, onChange }) {
  const [justChanged, setJustChanged] = useState(false);

  const handleToggle = () => {
    onChange(!checked);
    setJustChanged(true);
    setTimeout(() => setJustChanged(false), 100);
  };
  return (
    <label
      onClick={handleToggle}
      className="flex items-center space-x-3 cursor-pointer select-none"
    >
      <span
        className={`text-blue-600 text-[28px] transition-transform duration-300 
        ${justChanged ? "scale-125" : "scale-100"}`}
      >
        {checked ? <BsCheckSquareFill /> : <BsSquare />}
      </span>
      <span className="text-gray-800 text-base">{label}</span>
    </label>
  );
}

export default CustomCheckbox;
