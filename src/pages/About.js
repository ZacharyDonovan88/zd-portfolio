import React from "react";
import "../App.css";
import AnimatedPage from "../AnimatedPage";

function About() {
 
   return (
     <AnimatedPage>
        <div className="pageBox aboutPara">
          <h2 className="pageTitles">About</h2>
            <p>
              My name is Zachary Donovan Ceruto, I have just finished my full-stake 24 week course at Coding Boot Camp University of Adelaide.
                      
            </p>
            <p>
              I am actively searching for a junior Web Developing position. 
              I am thrilled to expand my existing knowledge and delve deeper into the fascinating world of coding! 
              I am very passionate about my work and my goal is to be part of a successful web developing team.
            </p>
        </div>
     </AnimatedPage>
   );
 }
 
 export default About;