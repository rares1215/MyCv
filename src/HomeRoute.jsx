import React from "react";
import { Navbarr } from "./Navbar";
import { Home } from "./Home";
import { About } from "./About";
import { Education } from "./Education";
import { Work } from "./Work";
import { Contact } from "./Contact";
import Headroom from "react-headroom"

function HomeRoute() {
  return (
    <>
    <Headroom>
      <Navbarr home="Home" />
      </Headroom>
      <Home />
      <About />
      <Education />
      <Work />
      <Contact />
    </>
  );
}
export default HomeRoute;
