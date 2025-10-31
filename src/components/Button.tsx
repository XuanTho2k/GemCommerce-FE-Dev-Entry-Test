import React from "react";

const Button = ({
  isSelected,
  onClick,
  children,
}: {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`flex items-center flex-1 h-[32px] justify-center cursor-pointer  rounded-md transition-all duration-200  ${
        isSelected ? "bg-[#424242]" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
