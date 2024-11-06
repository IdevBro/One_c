import React from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import ServiceCards from "./components/ServiceCards/ServiceCards";
import SectionCards from "./components/SectionCards/SectionCards";
import Famous from "./components/Famous/Famous";
import Support from "./components/Support/Support";
import Restaurant from "./components/Restaurant/Restaurant";
import Register from "./components/Register/Register";
import Dropdown from "./components/Dropdown/Dropdown";
import Stati from "./components/Stati/Stati";
import Marquee from "./components/Marquee/Marquee";

const App = () => {
  return (
    <Layout>
      <Header />
      <SectionCards />
      <Famous />
      <Support />
      <Restaurant />
      <Register />
      <Dropdown />
      <Stati />
      <Marquee />
    </Layout>
  );
};

export default App;
