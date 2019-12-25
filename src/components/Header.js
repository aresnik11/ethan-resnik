import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
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

    handleMenuClick = () => {
        const menuLinks = document.querySelector('.ui.black.large.inverted.stackable.top.fixed.seven.item.menu')
        if (menuLinks.style.display === "block") {
            menuLinks.style.display = "none";
        }
        else {
            menuLinks.style.display = "block";
        }
    }

    render() {
        return (
            <>
                <Menu
                    icon
                    color="black"
                    inverted
                    widths={1}
                    size="large"
                    fixed="top"
                    stackable
                    id="menu"
                >
                    <Menu.Item
                        onClick={this.handleMenuClick}
                    >
                        <Icon name='bars' />
                    </Menu.Item>
                </Menu>
                <Menu
                    color="black"
                    inverted
                    widths={7}
                    size="large"
                    fixed="top"
                    stackable
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
            </>
        )
    }
}

export default Header