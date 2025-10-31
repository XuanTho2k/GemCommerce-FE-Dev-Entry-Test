import React, { createContext, useState } from "react";

export const EntryContext = createContext({
  selected: 0,
  value: "0",
  setSelected: (unit: number) => {},
  setValue: (value: string) => {},
});

export const EntryProvider = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState(0);
  const [value, setValue] = useState("0");

  return (
    <EntryContext.Provider value={{ selected, value, setSelected, setValue }}>
      <div className="flex flex-col gap-4">{children}</div>
    </EntryContext.Provider>
  );
};
