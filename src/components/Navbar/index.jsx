import React from 'react'
import './navbar.css'
import Menus from './Menus'
import Contact from './Contact'

export default function index() {
    return (
        <div className='divNav'>
            <nav className='navbar'>
                <Menus />
                <Contact />
            </nav>
        </div>
    )
}
