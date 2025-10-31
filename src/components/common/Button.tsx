import React from "react";
import Tooltip from "./Tooltip";

interface Button {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  customClass: string;
  isDisabled: boolean;
  tooltipContent: string;
}

type ButtonProps = Partial<Button>;

const Button = ({
  isSelected,
  onClick,
  children,
  customClass,
  isDisabled = false,
  tooltipContent,
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center relative group flex-1 h-[32px] justify-center cursor-pointer  rounded-md transition-all duration-200 hover:bg-[#3B3B3B] ${customClass} ${
        isSelected ? "bg-[#424242]" : ""
      } ${isDisabled ? "!cursor-not-allowed hover:bg-transparent" : ""}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isDisabled && tooltipContent && (
        <Tooltip tooltipContent={tooltipContent} />
      )}
      {children}
    </button>
  );
};

export default Button;
