import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  card: {
    minWidth: 275,
    backgroundColor: "#363636",
    opacity: 0.8,
    height: "220px",
    borderRadius: "10px",
    color: "#eee",
    marginBottom: 5
  },
  root: {
    width: 500,
    height: 600
  },
  cardContent: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    height: "220px",
    width: "300px"
  },

  pos: {
    marginBottom: 5
  }
});
