import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const FeatureContext = createContext();

export const FeatureProvider = ({ children }) => {
  const [selectedfeature, setSelectedfeature] = useState(null);

  return (
    <FeatureContext.Provider value={{ selectedfeature, setSelectedfeature }}>
      {children}
    </FeatureContext.Provider>
  );
};
