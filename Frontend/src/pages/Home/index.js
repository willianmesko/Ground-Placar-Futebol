import React, { useState, useEffect } from "react";
import Campeonatos from "../../components/Campeonatos";
import PlacarBox from "../../components/PlacarBox";
import Button from '@material-ui/core/Button';
import api from "../../services/api";
import LoadingBoxPlacar from "../../components/loadingBox/placarBox";
export default function Home() {
  const [placar, setPlacar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(3);
   useEffect(() => {
    async function loadScore() {
      const result = await api.get("placartime/1083");
      setPlacar(result.data);
      setLoading(false);
    }
    loadScore();
  }, []);

  return (
    <>
      <Campeonatos />

      {!loading ? (
        placar.slice(0, visible).map(placar => <PlacarBox time={placar} />)
      ) : (
        <LoadingBoxPlacar />
      )}
      
      {visible < placar.length && 
        <div style={{display: "flex", justifyContent:"center"}}>
          <Button onClick={() => setVisible(visible + 3)} variant="contained" color="primary" >
             Carregar mais...
          </Button>
        </div>
      }
      
    </>
  );
}
