import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

import ListComponent from "../List/list-component";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const ProfileList = ({ username, firstname, lastname, phone }) => {
  const classes = useStyles();
  return (
    <List
      component="nav"
      aria-labelledby="user-info"
      subheader={<ListSubheader component="div">{`Information`}</ListSubheader>}
      className={classes.root}
    >
      <ListItem button>
        {/* <ListItemIcon>
          <SendIcon />
        </ListItemIcon> */}
        <ListItemText primary={`Username: ${username}`} />
      </ListItem>
      <ListItem button>
        {/* <ListItemIcon>
          <SendIcon />
        </ListItemIcon> */}
        <ListItemText primary={`Name: ${firstname} ${lastname}`} />
      </ListItem>
      <ListItem button>
        {/* <ListItemIcon>
          <SendIcon />
        </ListItemIcon> */}
        <ListItemText primary={`Number: ${phone}`} />
      </ListItem>
    </List>
  );
};

export default ProfileList;
