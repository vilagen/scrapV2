import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SendIcon from "@material-ui/icons/Send";

const ListComponent = ({ text }) => {
  return (
    <ListItem button>
      {/* <ListItemIcon>
          <SendIcon />
        </ListItemIcon> */}
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default ListComponent;
