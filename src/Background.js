import React, { createContext, useState, useContext } from "react";

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // Default color

  return (
    <BackgroundContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => useContext(BackgroundContext);
