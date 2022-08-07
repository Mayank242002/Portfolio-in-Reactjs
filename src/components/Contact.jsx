import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
import "./Contact-styles.css";

function Contact({SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY})
{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_q89tc2p', 'template_ive8yai', form.current, 'fhCihLiuroprNHNzc')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };

    return (<div className="container2" id="Contact">
          <div style={{textAlign:"center",fontSize:"40px",fontWeight:"500",margin:"40px 0px"}}>
             <h1>Contact Me</h1>
          </div>
       <div className="row">
         <div class="column">
          <img src={require("../images/map.jpg")} style={{width:"90%"}}/>
         </div>
         <div className="column">
          <form className="Form" ref={form} onSubmit={sendEmail}>
            <label htmlFor="Name">Name</label>
            <input type="text" name="name" placeholder="Your Name" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Your Email" />
            <label htmlFor="message" >Message</label>
            <textarea name="message" placeholder="Start typing..." ></textarea>
            <button type="submit">Send</button>
          </form>
         </div>
       </div>
    </div>);
}

export default Contact;