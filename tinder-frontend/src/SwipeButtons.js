import React from 'react'
import "./SwipeButtons.css"
import { IconButton } from '@mui/material'
import { MdReplay } from 'react-icons/md'
import { AiFillHeart, AiFillStar, AiOutlineClose } from "react-icons/ai"
import {BsFillLightningFill} from "react-icons/bs" 

const SwipeButtons = () => {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons__repeat'>
            <MdReplay fontSize={25}/>
        </IconButton>
        <IconButton className='swipeButtons__left'>
            <AiOutlineClose fontSize={25}/>
        </IconButton>
        <IconButton className='swipeButtons__star'>
            <AiFillStar fontSize={25}/>
        </IconButton>
        <IconButton className='swipeButtons__right'>
            <AiFillHeart fontSize={25}/>
        </IconButton>
        <IconButton className='swipeButtons__lightning'>
            <BsFillLightningFill fontSize={25}/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons