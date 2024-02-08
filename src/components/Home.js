import React from "react";
import "../App.css";
import AnimatedPage from "../AnimatedPage";

function Home() {
 
   return (
     <AnimatedPage>
        <div className="homePage">
            <img src={require('../assets/images/Zachary.jpg')} alt="image of Zachary"/>
                <h1>Zachary</h1>
                <h2>Junior Web Developer</h2>
        </div>
     </AnimatedPage>
   );
 }
 
 export default Home;