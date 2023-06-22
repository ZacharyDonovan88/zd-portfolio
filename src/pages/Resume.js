import React from "react";
import "../App.css";
import AnimatedPage from "../AnimatedPage";




function Resume() {
 
   return (
     <AnimatedPage>
        <div className="pageBox">
            <h2 className="pageTitles">Resume</h2>
                <div>
                    <img className="resumeImg" src={require('../assests/images/resumePg1.PNG')} alt="resume page 1" />
                    <img className="resumeImg" src={require('../assests/images/resumePg2.PNG')} alt="resume page 2" />
                    <img className="resumeImg" src={require('../assests/images/resumePg3.PNG')} alt="resume page 3" />
                </div>
        </div>
     </AnimatedPage>
   );
 }
 
 export default Resume;