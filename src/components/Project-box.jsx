import React from "react";
import "./Project-box-styles.css";

function ProjectBox({Title,Live,Source_code,Image_url})
{
    return(<div class="projects-items">
    <img src={require(`../images/${Image_url}`)} alt={Title}/>
    <div class="container">
        <h4><b>{Title}</b></h4>

        <div class="links">
            <a href={Live}>Live</a>
            <a href={Source_code}>Source Code</a>
        </div>
    </div>
</div>);
}


export default ProjectBox;