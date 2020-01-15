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
    width: "120px",
    height: "120px",
    "&:hover": {
      opacity: 0.7
    },
    '@media (min-width: 320px) and (max-width: 414px)': {
      width: "80px",
      height: "80px",
    },
   
  }
}));
