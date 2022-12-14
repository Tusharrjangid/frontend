import { Button, Typography } from '@mui/material'
import React from 'react'
import "./Projects.css"
import { AiOutlineProject } from "react-icons/ai"
import { Delete } from '@mui/icons-material'
import {FaRegSmileWink} from "react-icons/fa"

const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
}) => {
    return (
        <>
            <a href={url} className="projectCard" target="blank">
                <div>
                    <img src={projectImage} alt="Projects" />
                    <Typography variant='h5' >{projectTitle}</Typography>
                </div>
                <div>
                    <Typography variant='h4' >About Project</Typography>
                    <Typography>{description}</Typography>
                    <Typography variant='h6' >Tech Stack:{technologies} </Typography>
                </div>
            </a>
            {isAdmin &&(
                <Button>
                    <Delete/>
                </Button>
            ) }
        </>
    )
}

const Projects = () => {

    const projects = [1,2,3]

    return (
        <div className="projects">
            <Typography variant='h3' >Projects <AiOutlineProject /> </Typography>

            <div className="projectWrapper">
                {projects.map((projects, index) => (
                    <ProjectCard 
                    url="https://github.com/Tusharrjangid"
                    projectImage="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    projectTitle="Sample Project"
                    description="This is a sample project and i have developed this "
                    technologies="Mongodb,React,NodeJs,Express"
                     />
                ))}
            </div>
            <Typography variant='h3' style={{font:"100 1.2rem 'Ubuntu Mono' "}} >
                All The Projects Shown Above Are Made By ME <FaRegSmileWink/>
            </Typography>
        </div>
    )
}


export default Projects
