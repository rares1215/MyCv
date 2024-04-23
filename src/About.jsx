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

export function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div
        data-aos="fade-down"
        id="About"
        className="container text-center about-container"
      >
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h2 className="roboto-black-italic">About myself</h2>
            <p className="raleway">
              I am a dynamic individual with a sharp, logical mind and a proven ability to tackle challenges with efficiency. I am open to learning and evolving, quickly adapting to difficult situations.
              I enjoy doing physical activities like going to the gym becuase it keeps my mind clear and helps me stay active and healthy.Additionally, I love traveling because I like exploring new things and perspectives.{" "}
            </p>
          </div>
          <div className="col-lg-4">
            <h2 className="roboto-black-italic">What can I Do</h2>
            <p className="raleway">
              I can help you build your websites or other projects you have in store.
              I am at the beginning of the road but I am open to learn and I can adapt to your requirements.
              I am eager to contribute my skills and enthusiasm to your team.          
            </p>
          </div>
          <div style={{ color: "red" }} className="col-lg-4">
            <h2 className="roboto-black-italic">Currently learning</h2>
            <p className="raleway">Python and MySQL</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
