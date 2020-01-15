import React from "react";
import { useStyles, Logo } from "./styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#1E90FF", height: "85px" }}
      >
        <Link to="/">
          <Logo>
            <img
              src={"https://gremio.net/assets_site/img/logo-gremio.png"}
              alt="avatarfake"
            />
          </Logo>
        </Link>
      </AppBar>
    </div>
  );
}
