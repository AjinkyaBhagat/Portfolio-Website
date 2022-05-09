import React from "react";
import profile from "./profile.jpeg";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

const About = () => {
  return (
    <div className="bg-green pv3" id="about">
      <Flip left>
        <h1 className="tc f2 b ttu tracked avenir pv3">About Me</h1>
      </Flip>

      <div className="cf pv4">
        <Bounce left>
          <div className="fl w-50-l w-100-ns tc">
            <img
              alt="prpfile pic"
              className="br-100 h5-l h3-ns h4-m dib"
              src={profile}
            />
          </div>
        </Bounce>
        <Bounce right>
          <div className="fl w-50-l w-100-ns tc ph4">
            <div className="f4-l f5-ns pv3">
              <p className="">
                Hi, I'm Ajinkya Bhagat I'm a Full Stack Web Developer. Creating
                Beautiful things with quality and elegance. I give life to
                designs and build cool websites. My favourite technology is
                ReactJS.
                <br />
                Do check out my recent works below on Project Section.
              </p>
              <span className="mt3">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href="https://drive.google.com/file/d/10CHwZcOOSx1m7hoEW6lqFo4GedFU15ED/view?usp=sharing"
                >
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
};

export default About;
