import ProgressBar from "react-bootstrap/ProgressBar";
import React, { useEffect } from "react";
import ProjectPreview from "./projectpreview";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import image1 from "./images/Education1.jpg";
import image2 from "./images/Education2.jpg";
import image3 from "./images/Work1.png";
import image4 from "./images/Work9.png";
import image5 from "./images/Education3.jpg";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
</style>;
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;1,200&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
</style>;
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,600;1,600&display=swap')
</style>;

export function Education() {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  });

  const now1 = 90;
  const now2 = 50;
  const now3 = 50;
  const now4 = 40;
  const navigate = useNavigate();

  const navigateToPortofolio = function () {
    console.log("navigate to portofolio");
    navigate("/AllMyWork");
  };

  const dataBaseIcon = (
    <FontAwesomeIcon icon={faDatabase} style={{ color: "#ffffff" }} />
  );
  const codeIcon = (
    <FontAwesomeIcon icon={faCode} style={{ color: "#ffffff" }} />
  );

  const terminalIcon = (
    <FontAwesomeIcon icon={faTerminal} style={{ color: "#ffffff" }} />
  );

  const penIcon = (
    <FontAwesomeIcon icon={faPenFancy} style={{ color: "#ffffff" }} />
  );
  return (
    <>
      <h1
        id="Education"
        className="roboto-black-italic "
        style={{ color: "white", textAlign: "center", marginTop: "10rem" }}
      >
        Education, Projects and Skills <span className="dot"></span>
      </h1>
      <div style={{textAlign: "center"}} data-aos="fade-down" className="container experience-container">
        <h2
          className="rubik-semi-bold"
          style={{
            color: "white",
            marginTop: "12rem",
            borderStyle: "none none groove none",
            borderWidth: "thin",
            borderColor: "rgb(255, 89, 89)",
            display: "inline-block"
          }}
        >
          Education & Projects
        </h2>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="number-styling">
              <h1 className="number">
                3<span className="dot-education"></span>
              </h1>
              <h3
                style={{
                  color: "white",
                  marginLeft: "2rem",
                  marginBottom: "1rem",
                }}
              >
                Certificates
              </h3>
            </div>
          </div>
          <div className="col-lg-6 col-mid-12 col-sm-12">
            <Carousel
              interval={2000}
              className="education-carousel wider-carousel"
              prevIcon={
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{ color: "black", fontSize: "2.5rem" }}
                />
              }
              nextIcon={
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "black", fontSize: "2.5rem" }}
                />
              }
            >
              <Carousel.Item>
                <img
                  className="education-carousel-img"
                  src={image1}
                  alt="Certificate 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="education-carousel-img"
                  src={image2}
                  alt="Certificate 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="education-carousel-img"
                  src={image5}
                  alt="Certificate 3"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <section className="project-preview">
        <h2 className="rubik-semi-bold featured-title">Featured Projects</h2>
        <p className="raleway" style={{ marginTop: "0.5rem" }}>
          Explore some of my latest work below:
        </p>

        {/* Display previews of your projects here */}
        <div className="project-preview">
          <h3 style={{ marginTop: "5rem" }}>Newsletter</h3>
          <p className="raleway" style={{  marginBottom: "0.5rem" }}>
            A newsletter site
          </p>
          <img
            style={{ height: "75%", width: "75%" }}
            src={image3}
            alt="Newsletter"
          />
        </div>

        <div className="project-preview">
          <h3 style={{ marginTop: "5rem" }}>Tracalorie</h3>
          <p className="raleway" style={{ marginBottom: "0.5rem" }}>
            An app made for tracking calories
          </p>
          <img
            style={{ height: "75%", width: "75%" }}
            src={image4}
            alt="Tracalorie"
          />
        </div>

        {/* Add more project previews as needed */}
        <button
          style={{ marginTop: "rem" }}
          className="btn btn-lg btn-dark work-page-button:hover"
          onClick={navigateToPortofolio}
        >
          See full Portfolio Here
        </button>
      </section>

      <hr />
      <div className="education-title-div">
      <h2 className="education-title roboto-black-italic ">Skills</h2>
      </div>

      <div
        data-aos="zoom-out"
        className="container text-center education-container"
      >
        <div className="row align-items-center">
          <div className="col col-lg-6 col-md-12 col-sm-12 skill-col">
            <h4> Front-End {codeIcon}</h4>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12 progress-col">
            <ProgressBar
              variant="danger"
              animated
              now={now1}
              label={`${now1}%`}
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-lg-6 col-md-12 col-sm-12 skill-col">
            <h4> {terminalIcon} Back-End</h4>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12 progress-col">
            <ProgressBar
              variant="danger"
              animated
              now={now2}
              label={`${now2}%`}
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-lg-6 col-md-12 col-sm-12 skill-col">
            <h4> {dataBaseIcon} Data-Bases</h4>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12 progress-col">
            <ProgressBar
              variant="danger"
              animated
              now={now3}
              label={`${now3}%`}
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-lg-6 col-md-12 col-sm-12 skill-col">
            <h4> {penIcon} Design</h4>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12 progress-col">
            <ProgressBar
              variant="danger"
              animated
              now={now4}
              label={`${now4}%`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
