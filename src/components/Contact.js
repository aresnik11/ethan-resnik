import React from 'react'
import { Icon } from 'semantic-ui-react'
import Notes from './Notes'

const Contact = () => {
    return (
        <div className="white-container">
            <h1 className="heading">Get In Touch!</h1>
            <br/>
            <div className="icons">
                <a href="mailto:ethresnik@gmail.com">
                    <Icon name="mail outline" size="huge" />
                    &nbsp;&nbsp;&nbsp;
                    <span>ethresnik@gmail.com</span>
                </a>
                <br/><br/>
                <a href="tel:1-914-406-6703">
                    <Icon name="phone square" size="huge" />
                    &nbsp;&nbsp;&nbsp;
                    <span>914-406-6703</span>
                </a>
                <br/><br/>
                <a href="https://www.instagram.com/ethresnik" target="_blank" rel="noopener noreferrer">
                    <Icon name="instagram" size="huge" />
                    &nbsp;&nbsp;&nbsp;
                    <span>@ethresnik</span>
                </a>
            </div>
            <br/>
            <Notes />
            <br/>
        </div>
    )
}

export default Contact