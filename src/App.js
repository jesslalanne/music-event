import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured/Featured";
import VenueInfo from "./components/venue_info/VenueInfo";
import Highlights from "./components/highlights/Highlights";
import Pricing from "./components/pricing/Pricing";
import MyMap from "./components/location/MyMap";
import Footer from "./components/header_footer/Footer"
class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: "white" }}>
        <Header />
        <Element name="featured"><Featured /></Element>
        <Element name="venuenfo"><VenueInfo /></Element>
        <Element name="highlights"><Highlights /></Element>
        <Element name="pricing"><Pricing /></Element>
        <Element name="location"><MyMap /></Element>
        <Footer />
      </div>
    );
  }
}

export default App;
