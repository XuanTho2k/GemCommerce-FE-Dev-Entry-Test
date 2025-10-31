import { useState } from "react";
import minusIcon from "../assets/icons/minus-icon.svg";
import plusIcon from "../assets/icons/plus-icon.svg";
import { AdminUtils } from "../utils/utilities";
import Button from "./Button";

const CustomInput = ({
  selected,
  value,
  setValue,
}: {
  selected: number;
  value: string;
  setValue: (value: string) => void;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inInputHover, setInInputHover] = useState(false);

  const handleClick = (type: "minus" | "plus") => {
    setValue(
      (type === "minus"
        ? parseFloat(value) - 1
        : parseFloat(value) + 1
      ).toString()
    );
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setValue(newValue);
  }

  function handleInputBlur() {
    setIsFocused(false);
    if (selected == 0 && parseFloat(value) > 100) {
      setValue("100");
    } else {
      setValue(
        AdminUtils.formatNumericValue(
          value,
          selected == 0 ? "percentage" : "pixel"
        )
      );
    }
  }

  function handleInputFocus() {
    setIsFocused(true);
    if (value == "0") {
      setValue("");
    }
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
              className={`${value === "0" ? "opacity-50" : ""}`}
            />
          }
          isSelected={false}
          onClick={() => handleClick("minus")}
          customClass="rounded-r-none p-1 h-[36px]"
          isDisabled={value === "0"}
          tooltipContent="Value must greater than 0"
        />
        <div
          className="flex-1 flex items-center justify-center"
          onMouseEnter={() => setInInputHover(true)}
          onMouseLeave={() => setInInputHover(false)}
        >
          <input
            type="text"
            name="quantity"
            max={selected == 0 ? 100 : undefined}
            className="focus:outline-none focus:ring-0 p-0 m-0 text-center w-15"
            value={value}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
        <Button
          children={
            <img
              src={plusIcon}
              alt="plus"
              className={`${value === "100" ? "opacity-50" : ""}`}
            />
          }
          isSelected={false}
          onClick={() => handleClick("plus")}
          customClass="rounded-l-none p-1 h-[36px]"
          isDisabled={value === "100"}
          tooltipContent="Value must smaller than 100"
        />
      </div>
    </div>
  );
};

export default CustomInput;
