import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Homepage = () => {
    return (
        <div>
            <h1 id="name">Ethan Resnik</h1>
            <h2 className="heading">Composer, Pianist, Saxophonist</h2>
            <br/>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="3x" fixedWidth />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="3x" fixedWidth />
            </a>
            <a href="mailto:ethresnik@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="3x" fixedWidth />
            </a>
            <a href="tel:1-914-406-6703">
                <FontAwesomeIcon icon={faPhoneSquareAlt} size="3x" fixedWidth />
            </a>
        </div>
    )
}

export default Homepage