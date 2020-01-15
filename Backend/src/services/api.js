import axios from "axios";

const BASEAPI = "https://futebol.homolog.groundsportech.com/samples";

export const GroundApi = {
  copaBrasil: async () => {
    const result = await axios.get(`${BASEAPI}/campeonatos/670/partidas.json`);

    return result;
  },
  campeonatoBrasileiro: async () => {
    const result = await axios.get(`${BASEAPI}/campeonatos/673/partidas.json`);

    return result;
  },
  equipes: async () => {
    const result = await axios.get(`${BASEAPI}/campeonatos/670/equipes.json`);

    return result;
  },
  estadios: async () => {
    const result = await axios.get(`${BASEAPI}/estadios.json`);

    return result;
  },
  getCampeonato: async campeonatoId => {
    const result = await axios.get(
      `${BASEAPI}/campeonatos/${campeonatoId}/partidas.json`
    );

    return result;
  }
};
