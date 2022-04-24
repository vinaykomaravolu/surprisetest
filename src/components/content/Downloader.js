import React, { useState, useEffect } from "react";
import { Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GetAppIcon from "@material-ui/icons/GetApp";
import { saveAs } from "file-saver";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "absolute",
    bottom: theme.spacing(12),
    right: theme.spacing(6),
    height: "2.5rem",
    width: "2.5rem",
  },
  icon: {
    fontSize: "1.25em",
  },
}));

export const Downloader = ({ img }) => {
  const [image, setImage] = useState(img);
  const classes = useStyles();

  const downloadImage = () => {
    saveAs(image, "pokemonTrainer.jpg"); // Put your image url here.
  };

  return (
    <Tooltip
      title={"Download Image"}
      placement="right"
      TransitionComponent={Zoom}
    >
      <IconButton
        color="inherit"
        aria-label={"Toggle M"}
        className={classes.iconButton}
        onClick={downloadImage}
      >
        <GetAppIcon className={classes.icon} />
      </IconButton>
    </Tooltip>
  );
};
