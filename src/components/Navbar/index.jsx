import React from 'react'
import './navbar.css'
import Menus from './Menus'
import Icons from './Icons'

export default function index() {
    return (
        <nav className='navbar'>
            <Menus />
            <Icons />
        </nav>
    )
}
