import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
// import { connect } from 'react-redux';

// import {toggleDarkModeSwitch} from '../../redux/switches/switches.actions'

const BGSwitch = ({switchAction, color}) => {
  // const [state, setState] = React.useState({
  //   checkedA: true,
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <FormControlLabel
      control={
        <Switch
          // checked={state.checkedA}
          onChange={switchAction}
          color={color}
        />
      }
      label="Dark Mode"
    />
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   darkSwitch: () => dispatch(toggleDarkModeSwitch()),
// })

// export default connect(null, mapDispatchToProps)(BGSwitch);
export default BGSwitch;
