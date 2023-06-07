import React from 'react'
import "./Header.css"
import {CgProfile} from "react-icons/cg"
import { IconButton } from '@mui/material'
import {MdForum} from "react-icons/md"

const Header = () => {
  return (
    <div className='header'>
        <IconButton>
        <CgProfile fontSize={30} className='header__icon'/>

        </IconButton>
        <img className='header__logo' src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png' alt='/' />
        <IconButton>
        <MdForum fontSize={25} className='header__icon'/>

        </IconButton>
    </div>
  )
}

export default Header