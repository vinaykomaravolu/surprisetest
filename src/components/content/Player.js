import React, { useState, useEffect } from "react";
import { Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PlayArrow, Pause } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "absolute",
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    height: "2.5rem",
    width: "2.5rem",
  },
  icon: {
    fontSize: "3.25em",
  },
}));

export const Player = ({ url, fade }) => {
  const classes = useStyles();
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = (isplay) => {
    setPlaying(!playing);
    fade(true);
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);
  return (
    <Tooltip title={"Toggle music"} placement="left" TransitionComponent={Zoom}>
      <IconButton
        color="inherit"
        aria-label={"Toggle M"}
        className={classes.iconButton}
        onClick={toggle}
      >
        {!playing ? (
          <PlayArrow className={classes.icon} />
        ) : (
          <Pause className={classes.icon} />
        )}
      </IconButton>
    </Tooltip>
  );
};
