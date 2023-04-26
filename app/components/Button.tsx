"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  label: string;
  outline?: boolean;
  icon?: IconType;
  small?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  outline,
  icon: Icon,
  small,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
  relative
  disabled:opacity-70
  disabled:cursor-not-allowed
  rounded-lg
  transition
  w-full
  hover:opacity-80
 
  ${
    outline
      ? "bg-white border-black border text-black"
      : "bg-blue-600 text-white border-blue-600"
  } 
  
${
  small
    ? "py-1 text-sm border-[1px] font-light"
    : "py-3 text-md font-semibold border-2"
}
  `}
    >
      {Icon && <Icon className="absolute left-4" size={24} />}
      {label}
    </button>
  );
};

export default Button;
