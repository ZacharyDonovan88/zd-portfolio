import React from "react";
import "../App.css";
import AnimatedPage from "../AnimatedPage";

// Contact Mail
import ContactMail from "./ContactMail/ContactMail.js";


function Contact() {
 
   return (
     <AnimatedPage>
        <div className="pageBox">
            <h2 className="pageTitles">Contact</h2>
                <div className="contactText">
                    <div className="contactSpacing">
                        Email: <a href="mailto:Zachary.Donovan99@outlook.com" className="contactMailPhone">Zachary.Donovan99@outlook.com</a>
                    </div>
                    <div className="contactSpacing">
                        Phone:  <a href="tel:0422159001" className="contactMailPhone">0422 159 001</a>
                    </div>
                </div>
                    <div>
                        <ContactMail />
                    </div>
        </div>
     </AnimatedPage>
   );
 }
 
 export default Contact;