import { useReducer, useState } from "react";
import { useHistory } from "./useHistory";
import { useRoll } from "./useRoll";

const ASC = "asc";
const DESC = "desc";
export function useValues() {
  const [history, addRoll, setHistory] = useHistory([]);

  const [results, roll, test] = useRoll();
  const [balance, setBalance] = useState(99);

  const [user, setUser] = useState(null);
  const [order, setOrder] = useReducer(
    (order) => (order == ASC ? DESC : ASC),
    DESC
  );

  const [sorted, setSorted] = useState("id");
  const sortBy = (col) => {
    setOrder(order);
    setSorted(col);
    const sortedList = history.sort(compareBy(col));
    setHistory(sortedList);
  };

  const addRollandCheck = (roll) => {
    if (new Set(roll).size == 1 && roll[0] !== 7) {
      setBalance((balance) => balance + 5);
    } else if (new Set(roll).size == 1) {
      setBalance((balance) => balance + 10);
    } else if (new Set(roll).size == 2) {
      setBalance((balance) => balance + 0.5);
    } else {
      setBalance((balance) => balance - 0.5);
    }

    addRoll(roll.join("-"));
  };
  const compareBy = (col) => (a, b) => {
    return order === ASC ? a[col] - b[col] : b[col] - a[col];
  };
  return {
    sort: {
      sorted,
      sortBy,
      order,
    },
    game: {
      roll: roll(addRollandCheck),
      test,
      results,
    },
    user: {
      name: user,
      isLogged: user != null,
      balance,
      setName: setUser,
    },
    history: {
      data: history,
      addRoll,
    },
  };
}
