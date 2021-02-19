import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Copyright } from "./Copyright";
import Header from "./Header";
const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    minWidth: 800,
    marginBottom: theme.spacing(2),
  },
  header: {
    padding: theme.spacing(4, 1),
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
});

function Layout({ children, classes }) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
          <Header/>
      </header>
      <Container component="main" className={classes.main} maxWidth="sm">
        {children}
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Online Casino.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default withStyles(styles)(Layout);
