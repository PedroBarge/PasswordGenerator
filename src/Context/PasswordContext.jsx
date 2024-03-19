/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const DEFAULT_PASSWORD = {
  password: "",
  uppercase: false,
  lowercase: false,
  numbers: false,
  special: false,
  range: 0,
};

const PasswordContext = createContext(DEFAULT_PASSWORD);

const PasswordContextProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_PASSWORD);

  return (
    <PasswordContext.Provider value={{ state, setState }}>
      {children}
    </PasswordContext.Provider>
  );
};

export { PasswordContextProvider, PasswordContext };
