import { useState } from "react";
import CustomInput from "./CustomInput";
import UnitTab from "./UnitTab";

const EntryTest = () => {
  const [selected, setSelected] = useState(0);
  const [value, setValue] = useState("0");
  return (
    <div className="flex flex-col gap-4">
      <UnitTab
        selected={selected}
        setSelected={setSelected}
        value={value}
        setValue={setValue}
      />
      <CustomInput selected={selected} value={value} setValue={setValue} />
    </div>
  );
};

export default EntryTest;
