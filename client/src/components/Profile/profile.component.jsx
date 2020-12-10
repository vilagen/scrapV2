import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fade, Modal, Avatar } from "@material-ui/core";
import user from "./json/user.json";
import ProfileList from "./profile-list.component";

import { StarBorder } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const userInfo = React.useState(user.users);

  console.log(userInfo[0][0].username);

  const classes = useStyles();

  const handleOpen = (event) => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const id = open ? "transitions-popper" : undefined;

  return (
    <>
      <Avatar
        onClick={handleOpen}
        alt="Avatar Pic"
        src="./assets/images/defUserImage.jpg"
      ></Avatar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ProfileList
          username={userInfo[0][0].username}
          firstname={userInfo[0][0].first_name}
          lastname={userInfo[0][0].last_name}
          phone={userInfo[0][0].phone[0].number}
        />
      </Modal>
    </>
  );
};

export default Profile;
