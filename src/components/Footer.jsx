import React from "react";
import "./Footer-styles.css";

function Footer()
{
    return (
        <div id="footer" style={{textAlign: "center"}}>
        <h1 style={{textAlign: "center",margin:"100px 0px"}}>FOLLOW ME</h1>
        <a href="https://github.com/Mayank242002" class="fa fa-github"></a>
        <a href="https://www.linkedin.com/in/mayank-singh-negi-75a56a209/" class="fa fa-linkedin"></a>
        <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
        <a href="https://www.instagram.com/i.melody.i/" class="fa fa-instagram"></a>
        <p>Made with  ❤  by Mayank</p>
    </div>
    );
}

export default Footer;