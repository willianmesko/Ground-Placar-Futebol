import React from "react";
import { useStyles, Logo } from "./styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

export default function Header() {
  const classes = useStyles();

  return (
   
      <AppBar 
        position="static"
        className={classes.root}
        style={{backgroundColor: "#1E90FF"}}
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
   
  );
}
