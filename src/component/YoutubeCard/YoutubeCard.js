import React from 'react'
import { Typography } from '@mui/material'
import "./YoutubeCard.css"

const YoutubeCard = ({
    url="https://www.youtube.com/@tseries",
    title="Title Here",
    image,
})=>{
  return (
    <div className="youtubeCard">
        <a href={url}>
            <img src={image} alt="VideoS" />
            <Typography>{title}</Typography>
        </a>
    </div>
  )
}

export default YoutubeCard
