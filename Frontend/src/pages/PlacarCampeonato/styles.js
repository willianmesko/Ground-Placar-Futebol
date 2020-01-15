import styled from "styled-components";

export const CampeonatoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;

  h1 {
    @media (min-width: 320px) and (max-width: 414px) {
      font-size: 15px;
      }
 
  }

  img {
    padding-top: 5px;
    width: 120px;
    height: 120px; 
    @media (min-width: 320px) and (max-width: 414px){
      width: 80px;
      height: 80px; 
    }
 
  }
`;
