import React from "react";
import { scroller } from "react-scroll";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListIem from "@material-ui/core/ListItem";

const SideDrawer = props => {

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500, 
      delay: 100, 
      smooth: true, 
      offset: -150
    });
    props.onClose(false)
  }

  return (
    <Drawer anchor="right" open={props.open} onClose={() => props.onClose(false)}>
      <List component="nav">
        <ListIem button onClick={() => scrollToElement('featured')}>
          Event starts in
        </ListIem>

        <ListIem button onClick={() => scrollToElement('venuenfo')}>
          Venue NFO
        </ListIem>

        <ListIem button onClick={() => scrollToElement('highlights')}>
          Highlights
        </ListIem>

        <ListIem button onClick={() => scrollToElement('pricing')}>
          Pricing
        </ListIem>

        <ListIem button onClick={() => scrollToElement('location')}>
          Location
        </ListIem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
