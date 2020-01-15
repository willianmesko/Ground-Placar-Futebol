import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function Campeonatos() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Paper
          className={classes.control}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={1}>
                <Link to={`/placarcampeonato/${670}`}>
                  <Grid item>
                    <img
                      className={classes.grid}
                      style={{ width: "120px", height: "120px" }}
                      src={
                        "https://s3-sa-east-1.amazonaws.com/logos.footstast.net/campeonatos/copa-do-brasil.png"
                      }
                      alt="CopaBrasil"
                    />
                  </Grid>
                </Link>
                <Link to={`/placarcampeonato/${673}`}>
                  <Grid item>
                    <img
                      className={classes.grid}
                      style={{ width: "120px", height: "120px" }}
                      src={
                        "https://s3-sa-east-1.amazonaws.com/logos.footstast.net/campeonatos/brasileirao-serie-a.png"
                      }
                      alt="CampeonatoBrasileiro"
                    />
                  </Grid>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
