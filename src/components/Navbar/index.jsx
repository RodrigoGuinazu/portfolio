import React from 'react'
import './navbar.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function index() {
    return (
        <nav className='navbar'>
            <GitHubIcon style={{color: 'white'}}/>
            <LinkedInIcon style={{color: 'white'}}/>
            <AlternateEmailIcon style={{color: 'white'}}/>
        </nav>
    )
}
