import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    display: "flex",
    width: 600,
    alignItems: "center",
  },
  slot: {
    width: "33%",
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "2em",
    padding: theme.spacing(4, 4),
    border: "solid 1px",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
});

function Slots({ classes, results = [0, 0, 0] }) {
  return (
    <div className={classes.root}>
      {results.map((q, i) => (
        <div key={`Slot-${i}`} className={classes.slot}>
          {q}
        </div>
      ))}
    </div>
  );
}

export default withStyles(styles)(Slots);
