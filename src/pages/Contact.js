import React from "react";
import "../App.css";

// Contact Mail
import ContactMail from "./ContactMail/ContactMail.js";

function Contact() {
 
   return (
     <>
        <div className="pageBox">
            <h2 className="pageTitles">Contact</h2>
                <div>
                    <ContactMail />
                </div>
        </div>
     </>
   );
 }
 
 export default Contact;