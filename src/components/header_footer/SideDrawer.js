import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListIem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <Drawer anchor="right" open={props.open} onClose={() => props.onClose(false)}>
      <List component="nav">
        <ListIem button onClick={() => console.log("Event starts in")}>
          Event starts in
        </ListIem>

        <ListIem button onClick={() => console.log("Venue NFO")}>
          Venue NFO
        </ListIem>

        <ListIem button onClick={() => console.log("Highlights")}>
          Highlights
        </ListIem>

        <ListIem button onClick={() => console.log("Pricing")}>
          Pricing
        </ListIem>

        <ListIem button onClick={() => console.log("Location")}>
          Location
        </ListIem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
