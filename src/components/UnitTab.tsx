import { useState } from "react";
import Button from "./Button";

const UnitTab = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex items-center">
      <div className="flex-1 mr-auto text-xs font-normal text-[#AAAAAA]">
        Unit
      </div>
      <div className="flex-1 min-w-35 flex items-center p-[2px] bg-[#212121] rounded-md">
        <Button
          children="%"
          isSelected={selected === 0}
          onClick={() => setSelected(0)}
        />
        <Button
          children="px"
          isSelected={selected === 1}
          onClick={() => setSelected(1)}
        />
      </div>
    </div>
  );
};

export default UnitTab;
