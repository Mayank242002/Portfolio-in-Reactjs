import React from "react";
import "./Skills-box-styles.css";

function SkillsBox({topic,items})
{
    return (
        <div className="skills-box-item">
            <h1>{topic}</h1>
            {items.map((item)=>{
                return (<p>{item}</p>);
            })}
        </div>
    );
}
export default SkillsBox;