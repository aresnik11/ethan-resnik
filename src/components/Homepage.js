import React from 'react'
import { Icon } from 'semantic-ui-react'
import homepage from '../assets/homepage.jpg'

const Homepage = () => {
    return (
        <>
                <h1 id="name1">1. Ethan Resnik</h1>
                <h1 id="name2">2. Ethan Resnik</h1>
                <h1 id="name3">3. Ethan Resnik</h1>
                <h1 id="name4">4. Ethan Resnik</h1>
                <h1 id="name5">5. Ethan Resnik</h1>
                <h1 id="name6">6. Ethan Resnik</h1>
                <h1 id="name7">7. Ethan Resnik</h1>
                <h1 id="name8">8. Ethan Resnik</h1>
                <h1 id="name9">9. Ethan Resnik</h1>
                <h1 className="heading">Composer, Pianist, Saxophonist</h1>
                <a href="https://www.youtube.com/channel/UCKISvqGCXDr0hbyTWrn9Jlg" target="_blank" rel="noopener noreferrer">
                    <Icon name="youtube" size="huge" />
                </a>
                <a href="https://www.instagram.com/ethresnik" target="_blank" rel="noopener noreferrer">
                    <Icon name="instagram" size="huge" />
                </a>
                {/* <a href="mailto:ethresnik@gmail.com">
                    <Icon name="mail outline" size="huge" />
                </a>
                <a href="tel:1-914-406-6703">
                    <Icon name="phone square" size="huge" />
                </a> */}
                <br/><br/><br/>
                <img src={homepage} alt="Ethan Resnik" />
        </>
    )
}

export default Homepage