import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "auto",
    marginBottom: "auto",
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(4),
    },
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={`${classes.main}`} maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        <TextDecrypt text="Happy Birthday Jerry!" />
      </Typography>
      <Typography variant="h6" component="h2">
        <TextDecrypt text="From Vinay, Kevin, Jack, Andrew,and Josh." />
      </Typography>
      <Typography variant="h6" component="h2">
        <TextDecrypt text="Thought it would be fun to do something different!" />
      </Typography>
    </Container>
  );
};
