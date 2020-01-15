import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    height: "200px",
    fontFamily: "sans-serif",
    backgroundColor: "#363636",
    opacity: 0.8,
    color: "white"
  },
  container: {
    paddingBottom: "15px"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },

  cover: {
    width: "140px",
    padding: "15px",
    margin: "20px"
  }
}));
