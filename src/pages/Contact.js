import React from "react";
import "../App.css";

// Contact Mail
import ContactMail from "./ContactMail/ContactMail.js";

function Contact() {
 
   return (
     <>
        <div className="pageBox">
            <h2 className="pageTitles">Contact</h2>
                <div className="contactText">
                    <div className="contactSpacing">
                        Email: <a href="mailto:Zachary.Donovan99@outlook.com">Zachary.Donovan99@outlook.com</a>
                    </div>
                    <div className="contactSpacing">
                        Phone:  <a href="tel:0422159001">0422 159 001</a>
                    </div>
                </div>
                    <div>
                        <ContactMail />
                    </div>
        </div>
     </>
   );
 }
 
 export default Contact;