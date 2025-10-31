import { EntryProvider } from "../contexts/UnitTabContext";
import AppInput from "./AppInput";
import UnitTab from "./UnitTab";

const EntryTest = () => {
  return (
    <EntryProvider>
      <UnitTab />
      <AppInput />
    </EntryProvider>
  );
};

export default EntryTest;
