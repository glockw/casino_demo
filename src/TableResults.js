import { TableRow, TableSortLabel } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import React, { useContext, useMemo } from "react";
import { CasinoContext } from "./CasinoContext";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
});

function TableResults({ classes }) {
  const {
    sort: { sorted, sortBy, order },
    history,
  } = useContext(CasinoContext);
  const rows = useMemo(() => history.data);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={"id" == sorted}
                direction={order}
                onClick={() => sortBy("id")}
              >
                Id
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">Slot 1-3</TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={"time" == sorted}
                direction={order}
                onClick={() => sortBy("time")}
              >
                Time
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.slot}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
export default withStyles(styles)(TableResults);
