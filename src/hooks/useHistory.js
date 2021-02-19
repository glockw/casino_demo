import { useState } from "react";

export function useHistory(initial) {
  const [history, setHistory] = useState(initial);
  const addRoll = (val) => {
    let id = Math.max(...history.map((h) => h.id));

    if (!history.length) {
      id = 0;
    }
    const roll = {
      id: id + 1,
      slot: val,
      time: new Date().toLocaleDateString(),
    };
    setHistory((his) => his.concat(roll));
  };
  return [history, addRoll, setHistory];
}
