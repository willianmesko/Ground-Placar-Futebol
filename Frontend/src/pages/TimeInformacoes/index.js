import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../../services/api";
import TimeInfoBox from "../../components/TimeInfoBox";
import PlacarBox from "../../components/PlacarBox";
import LoadingBoxPlacar from "../../components/loadingBox/placarBox";
import LoadingBoxTime from "../../components/loadingBox/timeBox";

export default function TimeInformacoes() {
  const { timeId } = useParams();
  const [timeInfo, setTimeInfo] = useState([]);
  const [placarTime, setPlacarTime] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTimeInformacao() {
      const result = await api.get(`timeinfo/${timeId}`);
      setTimeInfo(result.data.timeInfo);
      setPlacarTime(result.data.placarTime);
      setLoading(false);
    }
    loadTimeInformacao();
  }, [timeId]);

  return (
    <>
      {!loading ? <TimeInfoBox time={timeInfo} /> : <LoadingBoxTime />}

      {!loading ? (
        placarTime.map(placar => <PlacarBox time={placar} />)
      ) : (
        <LoadingBoxPlacar />
      )}
    </>
  );
}
