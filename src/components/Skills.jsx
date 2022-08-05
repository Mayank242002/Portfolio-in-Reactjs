import React from "react";
import Data from "./skills-data";
import SkillsBox from "./Skills-box";
import "./Skills-styles.css";


function Skills()
{
    return ( 
    <div id="Skills">
        <h1>Skills</h1>
        <div className="skills">
        {Data.map(({topic,items})=>{
            return (
                <SkillsBox topic={topic} items={items}></SkillsBox>
            )
        })}
        </div>
      
    </div>);
}

export default Skills;