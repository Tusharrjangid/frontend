import {Typography } from '@mui/material'
import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
import {BsGithub,BsYoutube,BsLinkedin}from "react-icons/bs"

const Footer = () => {
  return (
    <div className="footer">
        <div>
            <Typography variant='h5' >About Me</Typography>
            <Typography>
                Hey, my name is Tushar Jangid <b>I am  a Full-Stack Developer</b>
            </Typography>

            <Link to="/contact" className="footerContactBtn" >
                <Typography>Contact Us</Typography>
            </Link>
        </div>
        <div>
            <Typography variant='h6' >Social Media</Typography>
            <a href="https://github.com/Tusharrjangid" target="blank">
                <BsGithub/>
            </a>
            <a href="https://www.youtube.com/@tseries" target="blank" >
                <BsYoutube/>
            </a>
            <a href="https://www.linkedin.com/in/tushar-jangid-ba57841a8" target="blank" >
                <BsLinkedin/>
            </a>
        </div>
    </div>
  )
}

export default Footer
