import React from "react";
import "../App.css";

function Home() {
 
   return (
     <>
        <div className="homePage">
            <a><img src={require('../assests/images/Zachary.jpg')} alt=""/></a>
                <h1>Zachary</h1>
        </div>
     </>
   );
 }
 
 export default Home;