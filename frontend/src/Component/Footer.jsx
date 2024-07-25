import React from "react";
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(){

    return (
        <>

<div className="footer_main">
  <div className="footersubone"><div id="followtxt">Follow us on</div><span id="fbicon"><FacebookIcon/></span><span id="twittericon"><XIcon/></span><span id="linkicon"><LinkedInIcon/></span><span id="instaicon"><InstagramIcon/></span></div>
  <div className="footersubtwo"><span>@ 2024 Copyright</span><span id="swiftfooter">swiftcart.com</span></div>
</div>

        </>
    )
}

export default Footer;