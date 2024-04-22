import React, {useState,useRef} from "react";
import Work_Data from "../JS_Components/portfolio";
import "../CSS/port.css"


const arrowStyles = {
    fontSize: "24px",
    color: "#fff" , 
    zIndex: 1, 
    cursor: "pointer",
  };
  
export default function Portfolio (){    
    return(

        <div className="portfolio" id="portfolio">

            <div className="portfolio-title">
                <h1>My work</h1>
            </div>
            <div className="my-work-container">
                {Work_Data.map((work,index) => {
                     return <div className="portfolio-format" key={index}>
                        <h3>{work.w_no}</h3>
                        <h2>{work.w_name}</h2>
                        <img src={work.w_img} key={index} alt="" />
                        <p>{work.w_desc}</p>
                    </div>
                })}
                
            </div>
            <div className="show-more" style={arrowStyles}>
                <p>show More</p>
                &#9758;
                </div>
   
        
            
            {/* <div className="my-work-container">

                {Work_Data.map((work, index)=>{
                    return  <img src={work.w_img} key={index} alt="" />
                })}
            </div>
            <div className="show-more" style={arrowStyles}>
                <p>show More</p>
                &#9758;
            </div>         */}
            

        </div>
    )
}
