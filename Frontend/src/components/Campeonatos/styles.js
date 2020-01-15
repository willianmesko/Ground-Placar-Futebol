import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  control: {
    padding: theme.spacing(2)
  },
  grid: {
    "&:hover": {
      opacity: 0.7
    }
  }
}));
