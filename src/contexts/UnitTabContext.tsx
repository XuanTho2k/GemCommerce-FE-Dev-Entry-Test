import React, { createContext, useState } from "react";

export const UnitTabContext = createContext({
  selected: 0,
  setSelectedUnit: (unit: number) => {},
});

export const UnitTabProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selected, setSelected] = useState(0);
  const setSelectedUnit = (unit: number) => {
    setSelected(unit);
  };

  return (
    <UnitTabContext.Provider value={{ selected, setSelectedUnit }}>
      {children}
    </UnitTabContext.Provider>
  );
};
