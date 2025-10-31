import { EntryProvider } from "../contexts/UnitTabContext";
import CustomInput from "./CustomInput";
import UnitTab from "./UnitTab";

const EntryTest = () => {
  return (
    <EntryProvider>
      <UnitTab />
      <CustomInput />
    </EntryProvider>
  );
};

export default EntryTest;
