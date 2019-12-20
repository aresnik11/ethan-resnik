import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name
        })
    }

    render() {
        return (
            <Menu
                color="black"
                inverted
                widths={7}
                attached
                size="large"
            >
                <Menu.Item
                    as={ Link }
                    to="/"
                    name='home'
                    active={this.state.activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={ Link }
                    to="/bio"
                    name='bio'
                    active={this.state.activeItem === 'bio'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={ Link }
                    to="/compositions"
                    name='compositions'
                    active={this.state.activeItem === 'compositions'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={ Link }
                    to="/recognition"
                    name='recognition'
                    active={this.state.activeItem === 'recognition'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={ Link }
                    to="/photos"
                    name='photos'
                    active={this.state.activeItem === 'photos'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={ Link }
                    to="/resume"
                    name='resume'
                    active={this.state.activeItem === 'resume'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={ Link }
                    to="/contact"
                    name='contact'
                    active={this.state.activeItem === 'contact'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}

export default Header