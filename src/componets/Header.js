import React from 'react'
import logo from '../images/logo192.png'

export default function Header(){
    return(
        <nav>
            <img src={logo} width="60px" alt = "ReactLogo"/>
            <h2> ReactFacts</h2>
            <h3>React Course - Project 1</h3>
        </nav>
    )
}