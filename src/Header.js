import {
  Avatar,
  FormControl,
  Input,
  InputLabel,
  withStyles,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useContext, useState } from "react";
import { CasinoContext } from "./CasinoContext";
import CustomDialog from "./CustomDialog";
import { currencyFormat } from "./Service";

const styles = (theme) => ({
  root: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(8),
  },
});

function Header({ classes }) {
  const {
    user: { name, balance, isLogged, setName },
  } = useContext(CasinoContext);

  const [_name, _setName] = useState("");
  const close = (fun) => {
    const save = () => {
      setName(_name);
      fun();
    };
    return (
      <Button autoFocus onClick={save} color="primary">
        Sign In
      </Button>
    );
  };
  return (
    <div className={classes.root}>
      <div>
        <Avatar variant="square" className={classes.large} src="brand.gif" />
      </div>
      <div>
        {isLogged ? (
          <div>
            Hi {name}
            <Button autoFocus onClick={() => setName(null)} color="primary">
              Sign Out
            </Button>
          </div>
        ) : (
          <CustomDialog
            title="Sign In"
            buttonMessage="SIGN IN"
            closeAction={close}
          >
            <form>
              <FormControl>
                <InputLabel htmlFor="avatar">Avatar </InputLabel>
                <Input id="avatar" onChange={(e) => _setName(e.target.value)} />
              </FormControl>
            </form>
          </CustomDialog>
        )}
        <br />
        <strong>Balance: {currencyFormat(balance)}</strong>
      </div>
    </div>
  );
}

export default withStyles(styles)(Header);
