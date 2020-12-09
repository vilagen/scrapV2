import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const BGSwitch = (name, color) => {
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name={name}
          color={color}
        />
      }
      label="Dark Mode"
    />
  );
};

export default BGSwitch;
