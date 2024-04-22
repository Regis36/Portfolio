// import "../CSS/styles.css"
import React, {useState} from "react";
import "../CSS/navbar.css"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavBar(){
    //state function
    const[menu,setMenu] = useState("home");
    return (    
         <div className="Nav"> 
            <a href= "/" className="Home-title"> <img alt = "Grad pic" src={"../assets/hokage_regis.jpeg"}/> REGIS WORLD  </a>
           
            <ul className="nav-menu">
                <li><AnchorLink className="anchor-link" href="#home"><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu ==="home" ? <DoubleArrowIcon/>:<></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=> setMenu("about")}>About Me</p></AnchorLink>{menu ==="about" ? <DoubleArrowIcon/>:<></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#experience"><p onClick={()=> setMenu("experience")}>Experience</p></AnchorLink>{menu ==="experience" ? <DoubleArrowIcon/>:<></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#portfolio"><p onClick={()=> setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu ==="portfolio" ? <DoubleArrowIcon/>:<></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=> setMenu("contact")}>Contact</p></AnchorLink>{menu ==="contact" ? <DoubleArrowIcon/>:<></>}</li>
            </ul>

            <div className= "nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact"> Connect With Me </AnchorLink></div>
         </div>
    ); 
}

