import React from "react";
import {TbPhoneCall} from 'react-icons/tb'
import {MdEmail} from 'react-icons/md'
import {AiFillLinkedin,AiOutlineGithub} from 'react-icons/ai'
function Footer(){
    return(
        <footer className="footer  fixed-bottom">
            <div style={{width:"60px",height:"60px",margin:"10px"}}>
                <a href="tel:2013440925" style={{width:"60px",height:"60px"}}><TbPhoneCall size={50}  color="black"/></a> 
            </div>
            <div style={{width:"60px",height:"60px",margin:"10px"}}>
                <a href="https://github.com/mohamed0228 "  style={{width:"60px",height:"60px"}}><AiOutlineGithub size={50}  color="black" /></a>   
            </div>
            <div style={{width:"60px",height:"60px",margin:"10px"}}>
                <a href="mailto:mohamed0228@outlook.fr?" style={{width:"60px",height:"60px"}}><MdEmail size={50}  color="black" /></a>
            </div>
            <div style={{width:"60px",height:"60px",margin:"10px"}}>
                <a href="https://www.linkedin.com/in/mohamed0228/" style={{width:"60px",height:"60px"}}><AiFillLinkedin size={50}  color="black"/></a> 
            </div>
        </footer>
    )
}
export default Footer;