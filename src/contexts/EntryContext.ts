import { createContext } from "react";

export const EntryContext = createContext({
  selected: 0,
  value: "0",
  setSelected: (unit: number) => {
    void unit;
  },
  setValue: (value: string) => {
    void value;
  },
});
