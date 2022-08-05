import React from "react";
import "./Header-styles.css"

function Header()
{
    return (<div id="header" >
        <a className="header-left" href="#Name">Mayank</a>
        <a className="header-right" href="#About">About</a>
        <a className="header-right" href="#Skills">Skills</a>
        <a className="header-right" href="#Project">Project</a>
        <a className="header-right" href="#Contact">Contact</a>
    </div>);
}

export default Header;