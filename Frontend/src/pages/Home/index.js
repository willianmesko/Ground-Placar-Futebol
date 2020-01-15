import React, { useState, useEffect } from "react";
import Campeonatos from "../../components/Campeonatos";
import PlacarBox from "../../components/PlacarBox";
import api from "../../services/api";
import LoadingBoxPlacar from "../../components/loadingBox/placarBox";
export default function Home() {
  const [placar, setPlacar] = useState([]);
  const [loading, setLoading] = useState(true);

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
        placar.map(placar => <PlacarBox time={placar} />)
      ) : (
        <LoadingBoxPlacar />
      )}
    </>
  );
}
