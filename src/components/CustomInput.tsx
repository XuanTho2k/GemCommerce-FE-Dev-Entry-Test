import { useState } from "react";
import Button from "./Button";
import plusIcon from "../assets/icons/plus-icon.svg";
import minusIcon from "../assets/icons/minus-icon.svg";

const CustomInput = () => {
  const [value, setValue] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [inInputHover, setInInputHover] = useState(false);

  const handleClick = () => {};

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setValue(parseFloat(value));
  }

  return (
    <div className="flex items-center">
      <div className="flex-1 mr-auto text-xs font-normal text-[#AAAAAA]">
        Value
      </div>
      <div
        className={`flex-1 min-w-35 flex items-center transition-all duration-200 bg-[#212121] rounded-md ${
          isFocused ? "outline-1 outline-[#3C67FF]" : ""
        } ${inInputHover ? "bg-[#424242]" : ""}`}
      >
        <Button
          children={
            <img
              src={minusIcon}
              alt="minus"
              className={`${value === 0 ? "opacity-50" : ""}`}
            />
          }
          isSelected={false}
          onClick={handleClick}
          customClass="rounded-r-none p-1 h-[36px]"
          isDisabled={value === 0}
          tooltipContent="Value must greater than 0"
        />
        <div
          className="flex-1 flex items-center justify-center"
          onMouseEnter={() => setInInputHover(true)}
          onMouseLeave={() => setInInputHover(false)}
        >
          <input
            type="float"
            name="quantity"
            className="focus:outline-none focus:ring-0 p-0 m-0 text-center w-15"
            value={value}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <Button
          children={
            <img
              src={plusIcon}
              alt="plus"
              className={`${value === 100 ? "opacity-50" : ""}`}
            />
          }
          isSelected={false}
          onClick={handleClick}
          customClass="rounded-l-none p-1 h-[36px]"
          isDisabled={value === 100}
          tooltipContent="Value must smaller than 100"
        />
      </div>
    </div>
  );
};

export default CustomInput;
