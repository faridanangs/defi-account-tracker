import React from 'react'
import Image from "next/image";
import {RiSendPlaneFill} from "react-icons/ri";
import {
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialInstagram,
}from "react-icons/ti";

// internal import
import Style from "../styles/footer.module.css";
import footerLogo from "../public/footerLogo.png"

function Footer() {
  return (
    <div>
      <div className={Style.footer}>
        <div className={Style.footer_box}>
          <Image src={footerLogo} alt='logo' width={100} height={100}/>
        </div>

        <div className={Style.footer_box}>
          <div className={Style.footer_input}>
            <input type="email" placeholder='Email'/>
            <RiSendPlaneFill />
          </div>
        </div>

        <div className={Style.footer_box}>
          <div className={Style.social}>
            <TiSocialFacebook/>
            <TiSocialTwitter/>
            <TiSocialInstagram/>
            <TiSocialYoutube/>
            <TiSocialLinkedin/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer