import React from "react";
import "../CSS/footer.css"; 
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer (){
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <p>I am a recent college graduate wtith a passion for coding, human rights, and web design, looking for a way to break into a career as a frontend developer</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <PersonOutlineOutlinedIcon/>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe"> Subscribe </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    <CopyrightIcon className="copyright"/> Regis Enama. All rights reserved
                </p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
};