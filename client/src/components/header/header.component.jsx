import React from "react";
import Switch from "../switches/switch.component";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "./header.styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "50px",
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${props.color}`}>
      <Grid container spacing={0}>
        <Grid item xs={1}>
          <Switch />
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}> Hi </Paper>
        </Grid>
        <Grid item xs={1}>
          <div className={classes.paper}> HI </div>
        </Grid>
      </Grid>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({});

export default Header;
