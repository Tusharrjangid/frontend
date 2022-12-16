import React from 'react'
import { Button, Typography } from '@mui/material'
import "./YoutubeCard.css"
import {FaTrash} from "react-icons/fa"
import { deleteYoutube, getUser } from '../../actions/user'
import { useDispatch } from 'react-redux'

const YoutubeCard = ({

    url="https://www.youtube.com/@tseries",
    title="Title Here",
    image,
    isAdmin=false,
    id
})=>{

  const dispatch=useDispatch()

  const deleteHandler= async(id)=>{
    await dispatch(deleteYoutube(id))
    dispatch(getUser())
  }

  return (
    <div className="youtubeCard">
        <a href={url}>
            <img src={image} alt="Videos" />
            <Typography>{title}</Typography>
        </a>
        {isAdmin && <Button
        style={{
          margin:"auto",
          display:"block",
          color:"rgba(40,40,40,0.7)"
        }}

        onClick={()=> deleteHandler(id)}
        >
          <FaTrash/>
          </Button>}
    </div>
  )
}

export default YoutubeCard
