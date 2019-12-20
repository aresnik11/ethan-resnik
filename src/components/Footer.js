import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import Notes from './Notes'

const Footer = () => {
    return (
        <>
            <Notes />
            <Menu compact icon='labeled'>
                <Menu.Item name='gamepad'>
                    <Icon name='gamepad' />
                    Games
                </Menu.Item>
                <Menu.Item name='video camera'>
                    <Icon name='video camera' />
                    Channels
                </Menu.Item>
                <Menu.Item name='video play'>
                    <Icon name='video play' />
                    Videos
                </Menu.Item>
            </Menu>
        </>
    )
}

export default Footer

