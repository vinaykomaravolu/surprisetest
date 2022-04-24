import React, { useState } from "react";
import { Content } from "../components/content/Content";
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DisplacementSphere from "../components/background/DisplacementSphere";
import { ThemeToggle } from "../components/theme/ThemeToggle";
import { Player } from "../components/content/Player";
import { Downloader } from "../components/content/Downloader";
import PokemonTheme from "../assets/audio/pokemonptheme.mp3";
import PokemonImage from "../assets/images/jerrypokemonecomission.png";
import Image from "material-ui-image";
import FadeIn from "react-fade-in";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  menu: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: true,
  },
  image: {
    alignSelf: "center",
    width: "auto",
    maxHeight: "90vh",
    marginTop: "20px",
    borderRadius: "15px",
  },
}));

export const Home = () => {
  const classes = useStyles();
  const [isFade, setIsFade] = useState(false);

  return (
    <>
      <div className={classes.root}>
        <DisplacementSphere />
        {!isFade ? (
          <Content />
        ) : (
          <FadeIn
            className={classes.image}
            delay={2250}
            transitionDuration={3500}
          >
            {" "}
            <img className={classes.image} src={PokemonImage} />
          </FadeIn>
        )}
        <ThemeToggle />
        <Hidden smDown className={classes.menu}>
          <FadeIn delay={3000} transitionDuration={4000}>
            <Player url={PokemonTheme} fade={setIsFade} />
          </FadeIn>
          <Downloader img={PokemonImage} />
        </Hidden>
        {/* <FooterText /> */}
      </div>
    </>
  );
};
