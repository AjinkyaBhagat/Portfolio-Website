import React from "react";
import { Link } from "react-scroll";
import Flip from "react-reveal/Flip";

const Cover = () => {
  return (
    <div className="tc pv7" id="cover">
      <Flip top>
        <h1 className="f1 white">
          Hello, I'm Ajinkya Bhagat
          <br />I am a Web Developer
        </h1>
        <Link
          className="btn btn-dark btn-lg mt-3"
          to="about"
          smooth={true}
          duration={800}
        >
          Know More
        </Link>
      </Flip>
    </div>
  );
};

export default Cover;
