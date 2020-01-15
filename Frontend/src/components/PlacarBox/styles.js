import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  card: {
    minWidth: 275,
    backgroundColor: "#363636",
    opacity: 0.8,
    height: "220px",
    borderRadius: "10px",
    color: "#eee",
    "&:hover": {
      backgroundColor: "#3f51b5",
      opacity: 0.7
    }
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 5
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  champ: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "30px",
    marginTop: "5px",
    fontWeight: "600",
    marginBottom: "4px"
  },
  fase: {
    textAlign: "center"
  },
  placar: {
    fontSize: "60px"
  }
});

export const PlacarInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solod #eee;
  text-decoration: none;

  span {
    text-align: center;
    font-size: 20px;
    color: #eee;
    font-weight: 600;
    margin-top: 4px;
  }
  img {
    height: 100px;
    border-radius: 50%;
  }
  a {
    display: block;
    text-decoration: none;
    background-color: #363636;
    opacity: 0.8;
    border-radius: 50%;
  }

  div {
    font-size: 20px;
  }
`;
