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
    },
    '@media (max-width: 320px)': {
      height: "110px",
    },
    '@media (max-width: 375px)': {
      height: "130px",
    },
    '@media (max-width: 414px)': {
      height: '150px'
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
    justifyContent: "space-between",
    '@media (min-width: 320px) and (max-width: 414px) ': {
      height: "15px"
     },
  },
  champ: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    marginTop: "5px",
    fontWeight: "600",
    marginBottom: "4px",
    '@media (min-width: 320px) and (max-width: 414px)': {
      fontSize: "15px",
      marginBottom: "10px",
    },
  },
  fase: {
    textAlign: "center",
    '@media (min-width: 320px) and (max-width: 414px)': {
      fontSize: "8px",
      marginBottom: "15px"
    },
  },
  placar: {
    fontSize: "60px"
  }
});

export const TimeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  span {
    text-align: center;
    font-size: 20px;
    color: #eee;
    font-weight: 600;
    margin-top: 4px;
    @media (min-width: 320px) and (max-width: 414px) {
      font-size: 10px;
    }
  }
  img {
    height: 100px;
    border-radius: 50%;
    @media (min-width: 320px)  and (max-width: 414px) {
      min-width: 40px;
      min-height: 40px;
      max-width: 60px;
      max-height: 60px;
   }
  }
  a {
    text-decoration: none;
  }
  a:hover {
    background-color: #363636;
    opacity: 0.8;
    border-radius: 50%;
  }
  div {
    font-size: 20px;
  }
`;


export const PlacarInfo = styled.div`
  p {
    font-size: 60px;
    @media (min-width: 320px) and (max-width: 414px) {
      font-size: 20px;
      padding-top: 5px;
      padding-left: 15px;
      padding-bottom: 10px;
    }
    
  }
  `;

