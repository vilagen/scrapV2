import React from "react";
import Switch from "../switches/switch.component";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import {toggleDarkModeSwitch} from '../../redux/switches/switches.actions'

import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "./header.styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: darkSwitch ? "darkmode" : "lightmode",
  },
  paper: {
    height: "50px",
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

const Header = ({darkSwitch, primary, ...otherProps}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}  >
      <Grid container spacing={0}>
        <Grid item xs={1}>
          <Switch switchAction={darkSwitch} color={primary}/>
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

const mapDispatchToProps = (dispatch) => ({
  darkSwitch: () => dispatch(toggleDarkModeSwitch()),
})

export default connect(null, mapDispatchToProps)(Header);

