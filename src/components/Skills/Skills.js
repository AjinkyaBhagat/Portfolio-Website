import React from "react";
import { SvgIcon } from "@material-ui/core";
import skillList from "../../Utils/Skills/Skills";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

const Skills = () => {
  return (
    <div className="tc bg-green pv3" id="skills">
      <Flip left>
        <h1 className="tc f2 b ttu tracked avenir pv3">Skills</h1>
      </Flip>

      <div className="d-flex flex-wrap justify-center pv3">
        <Zoom>
          {skillList.map((skill, i) => (
            <div className="h3 w4" key={i}>
              <SvgIcon
                titleAccess={skill.name}
                style={{ width: "auto", height: "100%" }}
                className="pa0 ma0"
                viewBox="0 0 24 24"
                htmlColor="black"
              >
                <path d={skill.svgPath} />
              </SvgIcon>
            </div>
          ))}
        </Zoom>
      </div>
    </div>
  );
};

export default Skills;
