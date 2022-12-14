import { Typography } from '@mui/material'
import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>This is a simple quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src="https://media-exp1.licdn.com/dms/image/D4D35AQH2eIriVZF1mQ/profile-framedphoto-shrink_200_200/0/1626565562422?e=1671444000&v=beta&t=EgzgYFJn3rNxiVxWHFWgHtk1EXpv2ikYssUuWvjb7rg" alt="Tushar" className='aboutAvatar' />

          <Typography variant='h4' style={{margin:"1vmax 0", color:"black"}} >Tushar</Typography>

          <Typography >Full Stack Developer</Typography>

          <Typography style={{margin:"1vmax 0", color:"black"}} >I am a teacher</Typography>
        </div>

        <div>
          <Typography style={{
            wordSpacing:"5px",
            letterSpacing:"5px",
            lineHeight:"50px",
            textAlign:"right"
          }} >
            This is Decription Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto accusantium nihil qui obcaecati odio. Odio deleniti animi sapiente qui dolorum?
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default About
