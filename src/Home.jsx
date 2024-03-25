import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import profile from "./images/Profile.jpeg"
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;1,200&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
</style>;

export function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Reduce the animation duration to 1000ms (1 second)
  }, []);

  return (
    <>
      <div className="container text-center home-container" data-aos="fade-up">
        <div className="row align-items-start">
          <div className="col-lg-6 col-md-12 col-sm-12 content-container">
            <h1 className="roboto-black-italic ">
              Hello World <span className="dot"></span>
            </h1>
            <p className="raleway">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 home-img-col">
            {/* Use Bootstrap's img-fluid class for responsive images */}
            <img
              src={profile}
              className="img-fluid"
              alt="A person"
            />
          </div>
        </div>
      </div>
      <hr />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
      </style>
    </>
  );
}
