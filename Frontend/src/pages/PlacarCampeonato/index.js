import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import PlacarBox from "../../components/PlacarBox";
import LoadingBoxPlacar from "../../components/loadingBox/placarBox";

import { CampeonatoInfo } from "./styles";
import api from "../../services/api";

export default function PlacarCampeonato() {
  const [placarCampeonato, setPlacarCampeonato] = useState([]);
  const [loading, setLoading] = useState(true);

  const { campeonatoId } = useParams();

  useEffect(() => {
    async function loadPlacarCampeonato() {
      const result = await api.get(`placarcampeonato/${campeonatoId}`);
      setPlacarCampeonato(result.data);
      setLoading(false);
    }
    loadPlacarCampeonato();
  }, [campeonatoId]);

  return (
    <>
      {campeonatoId === `673` ? (
        <CampeonatoInfo>
          <h1>Resultado Campeonato Brasileiro</h1>
          <img
            style={{ width: "120px", height: "120px" }}
            src={
              "https://s3-sa-east-1.amazonaws.com/logos.footstast.net/campeonatos/brasileirao-serie-a.png"
            }
            alt="CampeonatoBrasileiro"
          />
        </CampeonatoInfo>
      ) : (
        <CampeonatoInfo>
          <h1>Resultado Copa Brasil</h1>
          <img
            style={{ width: "120px", height: "120px" }}
            src={
              "https://s3-sa-east-1.amazonaws.com/logos.footstast.net/campeonatos/copa-do-brasil.png"
            }
            alt="copaBrasil"
          />
        </CampeonatoInfo>
      )}

      {!loading ? (
        placarCampeonato.map(placar => <PlacarBox time={placar} />)
      ) : (
        <LoadingBoxPlacar />
      )}
    </>
  );
}
