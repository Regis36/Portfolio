import React from 'react';
import "../CSS/experience.css";
import Experience_Data from "../JS_Components/experience_data"; 

const arrowStyles = {
    fontSize: "24px",
    color: "#fff" , 
    zIndex: 1, 
    cursor: "pointer",
  };

export default function Experience() {
   
    return(
        <div className='experience' id='experience'>
            <div className="experience-title">
                <h1> My Experience</h1>
            </div>

            <div className="experience-container">
                {Experience_Data.map((experience, experience_index)=>{
                    return <div className="experience-format" key={experience_index}>
                        <h3>{experience.exp_no}</h3>
                        <h2>{experience.exp_name}</h2>
                        <p>{experience.exp_desc}</p>
                        <div className="read-more">
                            <p>Read More</p>
                            <div className='arrow' style={arrowStyles}> &#9758;</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    ) 
}