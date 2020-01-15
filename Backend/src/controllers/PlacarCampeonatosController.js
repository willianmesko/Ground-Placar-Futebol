import { GroundApi } from "../services/api";
class PlacarCampeonatosController {
  async index(req, res) {
    const { timeId } = req.params;

    const copaBrasil = await GroundApi.copaBrasil();
    const campeonatoBrasileiro = await GroundApi.campeonatoBrasileiro();
    const estadios = await GroundApi.estadios();
    const equipes = await GroundApi.equipes();

    const placarTodosCampeonatos = copaBrasil.data.data.concat(
      campeonatoBrasileiro.data.data
    );

    const placarTime = placarTodosCampeonatos
      .filter(time => (time.idEquipeMandante == timeId ? true : false))
      .map(time => ({
        data: new Date(time.dataDaPartidaIso).toISOString().substring(0, 10),
        fase: time.fase,
        campeonatoId: time.idCampeonato,
        campeonatoNome:
          time.idCampeonato === 673 ? "Campeonato Brasileiro" : "Copa Brasil",
        golsTimeCasa: time.placar.golsMandante,
        golsTimeRival: time.placar.golsVisitante,
        timeCasaInfo: equipes.data.data.filter(timeCasa =>
          timeCasa.id === time.idEquipeMandante ? true : false
        ),
        timeRivalInfo: equipes.data.data.filter(timeRival =>
          timeRival.id === time.idEquipeVisitante ? true : false
        ),
        estadio: estadios.data.data.filter(estadio =>
          time.idEstadio === estadio.id ? true : false
        )
      }));

    return res.status(200).json(placarTime);
  }

  async show(req, res) {
    const { campeonatoId } = req.params;

    const placarCampeonato = await GroundApi.getCampeonato(campeonatoId);
    const estadios = await GroundApi.estadios();
    const equipes = await GroundApi.equipes();

    const placarTime = placarCampeonato.data.data
      .filter(time => (time.idEquipeMandante === 1083 ? true : false))
      .map(time => ({
        data: new Date(time.dataDaPartidaIso).toISOString().substring(0, 10),
        fase: time.fase,
        campeonatoId: time.idCampeonato,
        campeonatoNome:
          time.idCampeonato === 673 ? "Campeonato Brasileiro" : "Copa Brasil",
        golsTimeCasa: time.placar.golsMandante,
        golsTimeRival: time.placar.golsVisitante,
        timeCasaInfo: equipes.data.data.filter(timeCasa =>
          timeCasa.id === time.idEquipeMandante ? true : false
        ),
        timeRivalInfo: equipes.data.data.filter(timeRival =>
          timeRival.id === time.idEquipeVisitante ? true : false
        ),
        estadio: estadios.data.data.filter(estadio =>
          time.idEstadio === estadio.id ? true : false
        )
      }));

    return res.status(200).json(placarTime);
  }
}

export default new PlacarCampeonatosController();
