import React from "react";
import "./Project-styles.css"
import data from "./project-data";
import ProjectBox from "./Project-box";

function Project()
{
    return (<div id="Project">
        <h1>PROJECT</h1>
         <div className="Projects">
        {data.map(({Title, Live, Source_code, Image_url})=>{
            return(
                <ProjectBox Title={Title} Live={Live} Source_code={Source_code} Image_url={Image_url}
                />
            );
        })}
        </div>

    </div>);
}

export default Project;