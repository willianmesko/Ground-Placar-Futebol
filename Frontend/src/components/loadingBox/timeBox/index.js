import React from "react";

import { useStyles } from "./styles";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import { Skeleton } from "@material-ui/lab";
import Card from "@material-ui/core/Card";

export default function LoadingBoxTime() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="md">
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
