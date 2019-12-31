import React from 'react'
import { Icon } from 'semantic-ui-react'
import homepage from '../assets/homepage.jpg'

const Homepage = () => {
    return (
        <div className="white-container">
            <h1 id="name">Ethan Resnik</h1>
            <h1 id="subheader">Composer, Pianist, Saxophonist</h1>
            <a href="https://www.youtube.com/channel/UCKISvqGCXDr0hbyTWrn9Jlg" target="_blank" rel="noopener noreferrer">
                <Icon name="youtube" size="huge" />
            </a>
            <a href="https://www.instagram.com/ethresnik" target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" size="huge" />
            </a>
            <br/><br/><br/>
            <img src={homepage} alt="Ethan Resnik" id="home-photo" />
        </div>
    )
}

export default Homepage