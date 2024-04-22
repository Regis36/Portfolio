import React from 'react';
import "../CSS/about.css"; 
import ImageSlider from "../JS_Components/image-slider";

const images = [
    {url: '../assets/IMG_6838.jpeg'},
    {url: '../assets/rockies.jpeg'}, 
    {url: '../assets/footy.jpeg'}, 
    {url: '../assets/smile.JPG'}, 
    {url: '../assets/cali.jpg'},
    {url: '../assets/group_glasses.jpeg'},
    
] ;

const containerStyles = {
    width: "500px",
    height: "350px",
    margin: "0 auto",
    bottom: "50%",
}  

export default function About() {
   
    return(
        <> 
        <div className='About' id='about'>
            <div className="about-title">
                <h1> About Regis</h1>
            </div>

            <div style={containerStyles}> 
                <ImageSlider images={images}/>
            </div>

            <div className='about-sections'> 
                <div className="about-left">

                </div>
                <div className="about-right">
                    <div className="about-paragraph">
                        <p> I am an upcoming frontend developer from New York who studied at CUNY Hunter College </p>
                        <p> I don't have much experience in the computer science field beyond the skills I've learned in undergrad and what I've taught myself, but  I'm hoping to gain more experience through engaging in projects like this one and eventually find myself working full time making websites (Thats where you come in)</p>
                        <p> Besides computer science I am also interested in and very much invested with the idea of internet governance and aim to make the internet a safer place through practice, and policy making</p>
                        <p> I am also a nature enthusiast (love travelling), avid joketeller, and frequent concert goer </p>
                    </div>
                    <div className='about-skills'> 
                        <div className='about-skill'> <p>HTML&CSS</p> <hr style={{width:"90%"}} /></div>
                        <div className='about-skill'> <p>React JS</p> <hr style={{width:"75%"}} /></div>
                        <div className='about-skill'> <p>C++</p> <hr style={{width:"80%"}} /></div>
                        <div className='about-skill'> <p>JavaScript</p> <hr style={{width:"50%"}} /></div>
                        <div className='about-skill'> <p>MYSQL</p> <hr style={{width:"95%"}} /></div>
                        <div className='about-skill'> <p>French</p> <hr style={{width:"99%"}} /></div>

                    </div>
                    <div className="about-paragraph">
                        
                    </div>

                    <div className="about-achievements">
                        <div className="about-achievement">
                            <h1>BA</h1>
                            <p>in Computer Science</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>2</h1>
                            <p>years of web dev experience</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>10+</h1>
                            <p>Projects completed</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>4X</h1>
                            <p>CUNYAC Allstar (Team Player)</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        </>
    ) 
}