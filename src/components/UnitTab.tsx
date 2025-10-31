import { useContext } from "react";
import Button from "./common/Button";
import { EntryContext } from "../contexts/EntryContext";

const UnitTab = () => {
  const { selected, setSelected, value, setValue } = useContext(EntryContext);
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 mr-auto text-xs font-normal text-[#AAAAAA] leading-5">
        Unit
      </div>
      <div className="flex-1 min-w-35 flex items-center p-[3px] bg-[#212121] rounded-md">
        <Button
          children="%"
          isSelected={selected === 0}
          onClick={() => {
            setSelected(0);
            if (parseFloat(value) > 100) {
              setValue("100");
            }
          }}
          customClass={`${selected === 0 ? "" : "text-[#AAAAAA]"}`}
        />
        <Button
          children="px"
          isSelected={selected === 1}
          onClick={() => setSelected(1)}
          customClass={`${selected === 1 ? "" : "text-[#AAAAAA]"}`}
        />
      </div>
    </div>
  );
};

export default UnitTab;
