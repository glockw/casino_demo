import { createContext } from "react";

export const CasinoContext = createContext({});

export default function CasinoContextProvider({ value, children }) {
  return (
    <CasinoContext.Provider value={value}>{children}</CasinoContext.Provider>
  );
}
