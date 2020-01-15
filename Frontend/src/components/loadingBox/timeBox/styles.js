import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    justifyContent: "center",
    height: "200px",
    backgroundColor: "#363636",
    opacity: 0.8,
    '@media (min-width: 320px) and (max-width: 414px)': {
      height: "130px"
    }
  },
  root: {
    width: 500,
    height: 600
  },
  container: {
    paddingBottom: "15px"
  }
}));
