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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container text-center home-container" data-aos="fade-up">
        <div className="row align-items-start">
          <div className="col-lg-6 col-md-12 col-sm-12 content-container">
            <h1 className="roboto-black-italic ">
              Welcome <span className="dot"></span>
            </h1>
            <p className="raleway">
              Hi! My name is Rares Giurgescu and this is my personal website. This space is where I share my passions and projects.
              As a beginner in the IT department, I am constantly exploring new ideas, learning about new things that I can use in my projects and trying to improve myself everyday.
            </p>
            <p className="raleway">
              Feel free to explore the website and the other projects that I made and if I sparked you an interest, maybe we will work together.
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
