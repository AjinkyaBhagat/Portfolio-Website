import React from "react";
import Bounce from "react-reveal/Bounce";

const ProjectCard = (props) => {
  return (
    <Bounce bottom>
      <div className="card ma3 grow" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt="Project" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.des}</p>
        </div>
        <div className="card-body">
          <a className="m-1 btn btn-dark" href={props.liveView}>
            View Live
          </a>
          <a className="m-1 btn btn-dark" href={props.githubLink}>
            View Source Code
          </a>
        </div>
      </div>
    </Bounce>
  );
};

export default ProjectCard;
