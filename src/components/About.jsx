import React from "react";
import "./About-styles.css";

function Header()
{
    return (
        <div id="about">
        <div class="about-information">
            <h1 style={{fontSize:"40px"}}>Hey _______</h1>
            <h2 style={{fontSize:"60px"}}>I AM MAYANK</h2>
            <h3 style={{fontSize:"30px"}}>Junior Web Developer</h3>
        </div>
        <img src={require("../images/profile8.jpg")} className="img1" alt="profile-image1"/>
        <img src={require("../images/profile6.jpg")} className="img2"alt="profile-image2"/>
        <div class="about-information2">
            <h1>LET ME </h1>
            <h1>INTRODUCE</h1>
            <h1>MYSELF</h1>
            <br/>
            <div style={{width:"400px"}}>
                <p style={{wordSpacing: "3px"}}>Hey Everyone,Mayank Singh Negi here.I'm currently pursuing BTECH from
                    Graphic Era deemed To be
                    University,Dehradun</p>
                <br/>
                <p style={{wordSpacing: "3px"}}>I'm a  Developer.I also have Basic knowledge of Data Structures and Algorithms, Google cloud
                    platform,Azure,flutter</p>
                <br/>
                <button class="button"><a href="https://drive.google.com/file/d/1uVNoLtQmoIh_Gtnx1g7vBC11UEa_voKs/view?usp=sharing" download={"Mayank Resume"}>Get Resume</a></button>
            </div>

        </div>
    </div>
    );
}

export default Header;