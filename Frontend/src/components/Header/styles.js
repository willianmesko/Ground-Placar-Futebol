import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(1),
    height: "85px" ,
    '@media (max-width: 320px)': {
      height: "60px" ,
    },
    '@media ': {
      height: "75px" ,
    }
  },
}));

export const Logo = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solod #eee;
  img {
    height: 70px;
    @media (max-width: 320px) {
      height: 50px;
    },
    @media (max-width: 375px) {
      height: 40px;
    }
    }
`;
