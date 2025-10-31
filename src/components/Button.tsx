import React from "react";
import Tooltip from "./Tooltip";

const Button = ({
  isSelected,
  onClick,
  children,
  customClass,
  isDisabled = false,
  tooltipContent,
}: {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  customClass?: string;
  isDisabled?: boolean;
  tooltipContent?: string;
}) => {
  return (
    <div
      className={`flex items-center relative group flex-1 h-[32px] justify-center cursor-pointer  rounded-md transition-all duration-200 hover:bg-[#3B3B3B] ${customClass} ${
        isSelected ? "bg-[#424242]" : ""
      } ${isDisabled ? "!cursor-not-allowed hover:bg-transparent" : ""}`}
      onClick={onClick}
    >
      {isDisabled && tooltipContent && (
        <Tooltip tooltipContent={tooltipContent} />
      )}
      {children}
    </div>
  );
};

export default Button;
