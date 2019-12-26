import React from 'react'
import { Menu } from 'semantic-ui-react'

class CompMenu extends React.Component {
    state = {}

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name
        });
    }

  render() {
    return (
        <div>
            <Menu vertical>
                <Menu.Item>
                    <Menu.Header>Orchestra</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                        name='Snow Pond Overture'
                        active={this.state.activeItem === 'Snow Pond Overture'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Rush'
                        active={this.state.activeItem === 'Rush'}
                        onClick={this.handleItemClick}
                        />
                        {/* <Menu.Item
                        name='Piano Concerto No. 1 in E-Flat Major'
                        active={this.state.activeItem === 'Piano Concerto No. 1 in E-Flat Major'}
                        onClick={this.handleItemClick}
                        /> */}
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Concert Band</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                        name='Arrival'
                        active={this.state.activeItem === 'Arrival'}
                        onClick={this.handleItemClick}
                        />
                        {/* <Menu.Item
                        name='Flight 737'
                        active={this.state.activeItem === 'Flight 737'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Soldier March'
                        active={this.state.activeItem === 'Soldier March'}
                        onClick={this.handleItemClick}
                        /> */}
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>String Orchestra</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                        name='Blue Moonlight'
                        active={this.state.activeItem === 'Blue Moonlight'}
                        onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Chamber Music</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                        name='Lake Kawaguchi at Dawn'
                        active={this.state.activeItem === 'Lake Kawaguchi at Dawn'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Dance of the Phantoms'
                        active={this.state.activeItem === 'Dance of the Phantoms'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Winter Flashbacks'
                        active={this.state.activeItem === 'Winter Flashbacks'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Night in the Rainforest'
                        active={this.state.activeItem === 'Night in the Rainforest'}
                        onClick={this.handleItemClick}
                        />
                        {/* <Menu.Item
                        name='Reflective Sunset'
                        active={this.state.activeItem === 'Reflective Sunset'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Reflections'
                        active={this.state.activeItem === 'Reflections'}
                        onClick={this.handleItemClick}
                        /> */}
                        <Menu.Item
                        name='Graduation Eve'
                        active={this.state.activeItem === 'Graduation Eve'}
                        onClick={this.handleItemClick}
                        />
                        {/* <Menu.Item
                        name='Duet for Clarinet and Bassoon'
                        active={this.state.activeItem === 'Duet for Clarinet and Bassoon'}
                        onClick={this.handleItemClick}
                        /> */}
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Solo</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                        name='Une Promenade à travers le Metropolitan'
                        active={this.state.activeItem === 'Une Promenade à travers le Metropolitan'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Waltz No. 5 in F Minor'
                        active={this.state.activeItem === 'Waltz No. 5 in F Minor'}
                        onClick={this.handleItemClick}
                        />
                        {/* <Menu.Item
                        name='Two Pieces for Solo Piano - "Water" and "Sunrise"'
                        active={this.state.activeItem === 'Two Pieces for Solo Piano - "Water" and "Sunrise"'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Atonal Piano'
                        active={this.state.activeItem === 'Atonal Piano'}
                        onClick={this.handleItemClick}
                        /> */}
                        <Menu.Item
                        name='Prelude No. 2 in C-Sharp Minor'
                        active={this.state.activeItem === 'Prelude No. 2 in C-Sharp Minor'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Nocturne No. 1 in E-Flat Major'
                        active={this.state.activeItem === 'Nocturne No. 1 in E-Flat Major'}
                        onClick={this.handleItemClick}
                        />
                        {/* <Menu.Item
                        name='Strange Night'
                        active={this.state.activeItem === 'Strange Night'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Saxophone Piece'
                        active={this.state.activeItem === 'Saxophone Piece'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Prelude No. 4 in E-Flat Major'
                        active={this.state.activeItem === 'Prelude No. 4 in E-Flat Major'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Prelude No. 3 in A-Flat Major'
                        active={this.state.activeItem === 'Prelude No. 3 in A-Flat Major'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Prelude No. 1 in E Minor'
                        active={this.state.activeItem === 'Prelude No. 1 in E Minor'}
                        onClick={this.handleItemClick}
                        /> */}
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        </div>
    )
  }
}

export default CompMenu