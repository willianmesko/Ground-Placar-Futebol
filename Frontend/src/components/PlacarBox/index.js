import React from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import { PlacarInfo, useStyles } from "./styles";
const moment = require("moment");

export default function PlacarBox({ time }) {
  const classes = useStyles();

  const {
    urlLogo: logoTimeCasa,
    sigla: siglaTimeCasa,
    nome: nomeTimeCasa
  } = time.timeCasaInfo[0];
  const {
    urlLogo: logoTimeRival,
    sigla: siglaTimeRival,
    nome: nomeTimeRival,
    id: idTimeRival
  } = time.timeRivalInfo[0];

  const { golsTimeCasa, golsTimeRival, campeonatoNome, fase, data } = time;
  const { nome: estadioNome } = time.estadio[0];

  return (
    <Container maxWidth="sm" className={classes.pos}>
      <Card className={classes.card}>
        <p className={classes.champ}>{campeonatoNome}</p>
        <h5 className={classes.fase}>({fase})</h5>
        <CardContent className={classes.cardContent}>
          <PlacarInfo>
            <img src={logoTimeCasa} alt={nomeTimeCasa} />
            <span>{siglaTimeCasa}</span>
          </PlacarInfo>

          <div>
            <p
              className={classes.placar}
            >{`${golsTimeCasa} x ${golsTimeRival}`}</p>
            <h6 className={classes.fase}>
              {estadioNome} - {moment(data, "YYYY-MM-DD").format("DD/MM")}
            </h6>
          </div>

          <PlacarInfo>
            <Link to={`/timeinfo/${idTimeRival}`}>
              <img src={logoTimeRival} alt={nomeTimeRival} />
            </Link>
            <span>{siglaTimeRival}</span>
          </PlacarInfo>
        </CardContent>
      </Card>
    </Container>
  );
}
