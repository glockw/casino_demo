import { useState } from "react";
import { getRandomSet } from "../Service";
export function useRoll() {
  const [results, setResults] = useState([0, 0, 0]);
  const rol = (registerHistory) => (_) => {
    const result = getRandomSet();
    setResults(result);
    registerHistory(result);
  };

  const test = () => setResults([7, 7, 7]);

  return [results, rol, test];
}
