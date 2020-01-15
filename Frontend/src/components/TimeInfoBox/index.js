import React from "react";
import { useStyles } from "./styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function TimeInfoBox({ time }) {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="md">
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={time.urlLogo}
          title="logo"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h2">{time.nome}</Typography>

            <Typography variant="h4">
              {time.cidade} / {time.estado}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={time.urlLogo}
          title="logo"
        />
      </Card>
    </Container>
  );
}
