import "./App.css";
import CasinoContextProvider from "./CasinoContext";
import CustomActions from "./CustomActions";
import CustomDialog from "./CustomDialog";
import { useValues } from "./hooks/useValues";
import Layout from "./Layout";
import { currencyFormat } from "./Service";
import Slots from "./Slots";
import TableResults from "./TableResults";

function App() {
  const value = useValues();
  const onClose = (close) => <CustomActions close={close} />;

  return (
    <CasinoContextProvider value={value}>
      <Layout>
        <CustomDialog
          closeAction={onClose}
          title={`Casino Royale - Slots | Funds: ${currencyFormat(
            value.user.balance
          )}`}
          buttonMessage="Play"
        >
          <Slots />
        </CustomDialog>
        <TableResults />
      </Layout>
    </CasinoContextProvider>
  );
}

export default App;
