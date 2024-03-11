import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
</style>;
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;1,200&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
</style>;

export function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const linkedIn = (
    <FontAwesomeIcon
      icon={faLinkedin}
      beatFade
      size="2xl"
      style={{ color: "#ffffff" }}
    />
  );
  const twitter = (
    <FontAwesomeIcon
      icon={faTwitter}
      beatFade
      size="2xl"
      style={{ color: "#ffffff" }}
    />
  );
  const facebook = (
    <FontAwesomeIcon
      icon={faFacebook}
      beatFade
      size="2xl"
      style={{ color: "#ffffff" }}
    />
  );
  const phone = <FontAwesomeIcon icon={faPhone} shake />;
  const envelope = (
    <FontAwesomeIcon icon={faEnvelope} bounce style={{ color: "white" }} />
  );
  return (
    <>
      <div id="Contact" className="contact-container">
        <h1 className="contact-title roboto-black-italic">Contact me Here</h1>
        <div className="container text-center">
          <div data-aos="fade-right" className="row">
            <div className="col">
              <h5> {phone} 0734867957</h5>
              <h5> {envelope} raresgiurgescu@gmail.com</h5>
            </div>
            <div className="col">
              <a className="media-brand" href="">
                {facebook}
              </a>
              <a className="media-brand" href="">
                {twitter}
              </a>
              <a
                className="media-brand"
                href="https://www.linkedin.com/in/rares-alexandru-giurgescu-0b79382a3/"
              >
                {linkedIn}
              </a>
            </div>
          </div>
        </div>
        <footer data-aos="fade-right">
          © Made by Giurgescu Rares-Alexandru
        </footer>
      </div>
    </>
  );
}
