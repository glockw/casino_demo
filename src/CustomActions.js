import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { CasinoContext } from "./CasinoContext";

const CustomActions = withStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    margin: theme.spacing(0.5, 1),
  },
}))(function ({ classes, close }) {
  const {
    game: { roll, test },
  } = useContext(CasinoContext);
  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={roll} className={classes.button}>
        Rol
      </Button>

      <Button
        variant="outlined"
        onClick={test}
        className={classes.button}
        color="primary"
      >
        Test
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={close}
        color="secondary"
      >
        Close
      </Button>
    </div>
  );
});

export default CustomActions;
