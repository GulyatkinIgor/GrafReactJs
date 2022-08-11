import "./App.css";
import React from "react";

import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Navigation from "./routes/Navigation/navigation.component";

import Home from "./routes/Home/home.component";
import AboutUs from "./routes/AboutUs/aboutus.component";
import Uslugi from "./routes/Uslugi/uslugi.component";
import Sales from "./routes/Sales/sales.component";
import Novostroiki from "./routes/Novostroiki/novostroiki.component";
import Kotetg from "./routes/Kotetg/kotetg.component";
import Commerce from "./routes/Commerce/commerce.component";
import Ipoteka from "./routes/Ipoteka/ipoteka.component";
import Rent from "./routes/Rent/rent.component";
import { useState } from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  getDataApparts = async () => {
    console.log("fetch", "start");
    const dataAppart = await axios.get(`http://localhost:3000/api/aparts`);
    console.log("fetch", "wait");
    console.log("fetch", dataAppart.request.response);
    const dataJson = JSON.parse(dataAppart.request.response);
    console.log("done", dataJson);
    this.setState({
      data: dataJson,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.getDataApparts();
  }

  render() {
    return (
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="uslugi" element={<Uslugi />} />
          <Route path="sales" element={<Sales />} />
          <Route path="novostroiki" element={<Novostroiki />} />
          <Route path="kotetg" element={<Kotetg />} />
          <Route path="commerce" element={<Commerce />} />
          <Route path="ipoteka" element={<Ipoteka />} />
          <Route path="rent" element={<Rent />} />
        </Route>
      </Routes>
    );
  }
}
