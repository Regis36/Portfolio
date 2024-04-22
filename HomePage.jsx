/**
 * This is the homepage for my website 
 * It will be the first page that pops up 
 */
 import React from 'react';
//  import "../CSS/styles.css"; 
import "../CSS/homepage.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';

 export default function HomePage() {
    return(
        <>
            <div id='home' className="home">
                <img src={'../assets/IMG_1588.JPG' } alt=''/>
               {/* <img src="../assets/IMG_1588.JPG" alt="" /> */}
               <h1> <span>I'm Regis Enama,</span> a prospective Frontend developer based in New York</h1>
               <p className='description'> I am a recent college graduate wtith a passion for coding and web design, looking for a way to break into a career as a frontend developer</p> 
               <div className="action">
                    <div className="homepage-connect"> <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink> </div>
                    <div className="homepage-resume"> My resume</div>
               </div>
            </div>
            
        </>
    )
 } 