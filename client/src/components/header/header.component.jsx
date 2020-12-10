import React from "react";
import Switch from "../switches/switch.component";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { toggleDarkModeSwitch } from "../../redux/switches/switches.actions";
import Profile from "../Profile/profile.component";

import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "./header.styles.css";

const Header = ({ darkSwitch, bgSwitch, primary, ...otherProps }) => {
  const backGround = bgSwitch ? "darkmode" : "lightmode";
  const paperBG = bgSwitch ? "rgb(41, 40, 43)" : "aliceblue";
  const paperColor = bgSwitch ? "white" : "black";

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
    },
    paper: {
      height: "100%",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: paperBG,
      color: paperColor,
    },
  }));

  const classes = useStyles();

  return (
    <Grid container spacing={0} className={`${classes.root} ${backGround}`}>
      <Grid item xs={1}>
        <Switch switchAction={darkSwitch} color={primary} />
      </Grid>

      <Grid item xs={10} style={{ height: "100%" }}>
        <Paper className={classes.paper}> Hi </Paper>
      </Grid>

      <Grid item xs={1} className={classes.paper}>
        <Profile></Profile>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => ({
  darkSwitch: () => dispatch(toggleDarkModeSwitch()),
});

const mapStateToProps = (state) => {
  return { bgSwitch: state.switch.darkmode };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
