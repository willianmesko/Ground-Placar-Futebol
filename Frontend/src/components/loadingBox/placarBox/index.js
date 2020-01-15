import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import { Skeleton } from "@material-ui/lab";
import { useStyles } from "./styles";


export default function LoadingBoxPlacar() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.pos}>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.root}>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.root}>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.root}>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
