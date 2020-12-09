import React from "react";
import Switch from "../switches/switch.component";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { toggleDarkModeSwitch } from "../../redux/switches/switches.actions";

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
    },
    paper: {
      height: "50px",
      textAlign: "center",
      backgroundColor: paperBG,
      color: paperColor,
    },
  }));

  const classes = useStyles();

  return (
    <div className={`${classes.root} ${backGround}`}>
      <Grid container spacing={0}>
        <Grid item xs={1}>
          <Switch switchAction={darkSwitch} color={primary} />
        </Grid>

        <Grid item xs={10}>
          <Paper className={`${classes.paper}`}> Hi </Paper>
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
});

const mapStateToProps = (state) => {
  return { bgSwitch: state.switch.darkmode };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
