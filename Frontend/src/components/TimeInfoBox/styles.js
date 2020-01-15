import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    height: "200px",
    fontFamily: "sans-serif",
    backgroundColor: "#363636",
    opacity: 0.8,
    color: "white",
    '@media (min-width: 320px) and (max-width: 414px)': {
      height: "150px"
    }
  },
  container: {
    paddingBottom: "15px"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    fontSize: "50px",
    '@media (min-width: 320px) and (max-width: 414px)': {
      fontSize: "20px"
    }
  },

  cover: {
    width: "140px",
    padding: "15px",
    margin: "20px",
    '@media (min-width: 320px) and (max-width: 414px)': {
      minWidth: "40px",
      maxWidth: "40px",
      minHeight: "80px",
      maxHeight: "80px"

    }
  }
}));
