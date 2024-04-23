import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

export function Work() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const reactIcon = (
    <FontAwesomeIcon
      icon={faReact}
      size="2xl"
      style={{ color: "#009dff", marginRight: "2.5rem" }}
    />
  );
  const jsIcon = (
    <FontAwesomeIcon
      icon={faJs}
      size="2xl"
      style={{ color: "#fff700", marginRight: "2.5rem" }}
    />
  );
  const htmlIcon = (
    <FontAwesomeIcon
      icon={faHtml5}
      size="2xl"
      style={{ color: "#ff0000", marginRight: "2.5rem" }}
    />
  );

  const cssIcon = (
    <FontAwesomeIcon
      icon={faCss3Alt}
      size="2xl"
      style={{ color: "#1368fb", marginRight: "2.5rem" }}
    />
  );

  const bootstrapIcon = (
    <FontAwesomeIcon
      icon={faBootstrap}
      size="2xl"
      style={{ color: "#7c16f8", marginRight: "2.5rem" }}
    />
  );

  const nodeIcon = (
    <FontAwesomeIcon
      icon={faNodeJs}
      size="2xl"
      style={{ color: "#27be09", marginRight: "2.5rem" }}
    />
  );
  return (
    <>
      <div data-aos="fade-down" id="icons-div" className="icons-div">
        {reactIcon}
        {jsIcon}
        {htmlIcon}
        {cssIcon}
        {bootstrapIcon}
        {nodeIcon}
      </div>
      <hr />
    </>
  );
}
