import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Description extends Component {
  render() {
    return (
      <Fade>
        <div className="center_wrapper">
          <h2>Highlights</h2>
          <div className="highlight_description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, neque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, molestias.
          </div>
        </div>
      </Fade>
    );
  }
}

export default Description;
