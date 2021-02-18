import { useReducer, useState } from "react";
import "./App.css";
import Layout from "./Layout";
import TableResults from "./TableResults";

const ASC = "asc";
const DESC = "desc";
const data = [
  { id: 1, result: "1-2-3", time: new Date().toLocaleDateString() },

  { id: 2, result: "1-9-3", time: new Date().toLocaleDateString() },
];
function App() {
  const [order, setOrder] = useReducer(
    (order) => (order == ASC ? DESC : ASC),
    DESC
  );

  const [results, setResults] = useState(data);
  const [sorted, setSorted] = useState("id");

  const compareBy = (col) => (a, b) => {
    return order === ASC ? a[col] - b[col] : b[col] - a[col];
  };

  const sortBy = (col) => {
    setOrder(order);
    setSorted(col);
    const sortedList = results.sort(compareBy(col));
    setResults(sortedList);
  };
  return (
    <Layout>
      <TableResults
        results={results}
        sortOrder={order}
        sorted={sorted}
        sortBy={sortBy}
      />
    </Layout>
  );
}

export default App;
