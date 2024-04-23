import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Projects } from "./projects";
import { useEffect } from "react";
import work1 from "../images/Work1.png";
import work2 from "../images/Work2.png";
import work3 from "../images/Work3.png";
import work4 from "../images/Work4.png";
import work5 from "../images/Work5.png";
import work6 from "../images/Work6.png";
import work7 from "../images/Work7.png";
import work8 from "../images/Work8.png";
import work9 from "../images/Work9.png";
import { Contact } from "../Contact";
import Headroom from "react-headroom";

export function AllMyWork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const arrow = <FontAwesomeIcon icon={faCircleArrowLeft} size="2xl" />;
  const navigate = useNavigate();

  const navigateHome = function () {
    navigate("/");
  };

  return (
    <>
    <div className="page-container">
    <Headroom>
    <nav className="work-page-nav navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <button
          onClick={navigateHome}
          className="btn btn-lg btn-dark work-page-button:hover"
        >
          {arrow}
        </button>
      </div>
    </nav>
    </Headroom>

      <div className="projects-container">
      <Projects
        link="https://my-first-personal-site.onrender.com"
        source={work3}
        alt="First Site Made"
        name="First Website"
        description="This is my first website , It s a simple website made with basic HTML and CSS knowledge"
      />

      <Projects
        link="https://tindog-gyv9.onrender.com"
        source={work6}
        alt="A Dating App model"
        name="TinDog"
        description="A dating type website but for dogs made with basic HTML and Css"
      />

      <Projects
        link="https://drum-kit-9tbm.onrender.com"
        source={work4}
        alt="Drum-Kit App"
        name="Drum-Kit"
        description="This is a simple drum-kit web app made with basic JavaScript knowledge"
      />

      <Projects
        link="https://simon-says-vi67.onrender.com"
        source={work5}
        alt="Simon-Says App"
        name="Simon-Says"
        description="It s a simon says game model made with  basic JavaScript and Jquery "
      />

      <Projects
        link="https://node-api2-ayq5.onrender.com"
        source={work1}
        alt="newsletter page"
        name="Newsletter"
        description="This is a Newsletter web app that uses an API made with Node.js and  Express.js"
      />

      <Projects
        link="https://to-do-list-nq78.onrender.com"
        source={work2}
        alt="Todo List"
        name="Todo List"
        description="This is a Todo list web app that has a database made with Node.Js, Express.Js, EJS and MongoDb/Mongoose"
      />

      <Projects
        link="https://flixx.onrender.com"
        source={work8}
        alt=" A movie app"
        name="Flixx"
        description="A streaming service type website made with only pure JavaScript"
      />

      {/* <Projects
        link="https://trackcalorie.onrender.com"
        source={work9}
        alt=" A track calorie  app"
        name="TraCalorie"
        description="It s a web app made to help you track your calories through out the day, made with JavaScript and WebPack "
      /> */}
      </div>
      </div>

      {/* <Projects
        link="https://kepper-app.onrender.com"
        source={work7}
        alt=" A Secret App"
        name=" A Secret App"
        description="Hello World asdasdasdasdasd"
      /> */}

      <Contact />
    </>
  );
}