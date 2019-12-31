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
            <Menu
                vertical
                id="vert-cont"
            >
                <Menu.Item>
                    <Menu.Header
                        as="a"
                        href="#orchestra"
                        className="content-header"
                    >
                        Orchestra
                    </Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            as="a"
                            href="#snow-pond"
                            name='Snow Pond Overture'
                            active={this.state.activeItem === 'Snow Pond Overture'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            as="a"
                            href="#rush"
                            name='Rush'
                            active={this.state.activeItem === 'Rush'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header
                        as="a"
                        href="#concert-band"
                    >
                        Concert Band
                    </Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            as="a"
                            href="#arrival"
                            name='Arrival'
                            active={this.state.activeItem === 'Arrival'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header
                        as="a"
                        href="#string-orchestra"
                    >
                        String Orchestra
                    </Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            as="a"
                            href="#blue-moonlight"
                            name='Blue Moonlight'
                            active={this.state.activeItem === 'Blue Moonlight'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header
                        as="a"
                        href="#chamber-music"
                    >
                        Chamber Music
                    </Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            as="a"
                            href="#lake-kawaguchi"
                            name='Lake Kawaguchi at Dawn'
                            active={this.state.activeItem === 'Lake Kawaguchi at Dawn'}
                            onClick={this.handleItemClick}
                        >
                            Lake Kawaguchi at Dawn
                        </Menu.Item>
                        <Menu.Item
                            as="a"
                            href="#dance-phantoms"
                            name='Dance of the Phantoms'
                            active={this.state.activeItem === 'Dance of the Phantoms'}
                            onClick={this.handleItemClick}
                        >
                            Dance of the Phantoms
                        </Menu.Item>
                        <Menu.Item
                            as="a"
                            href="#winter-flashbacks"
                            name='Winter Flashbacks'
                            active={this.state.activeItem === 'Winter Flashbacks'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            as="a"
                            href="#night-rainforest"
                            name='Night in the Rainforest'
                            active={this.state.activeItem === 'Night in the Rainforest'}
                            onClick={this.handleItemClick}
                        >
                            Night in the Rainforest
                        </Menu.Item>
                        <Menu.Item
                            as="a"
                            href="#graduation-eve"
                            name='Graduation Eve'
                            active={this.state.activeItem === 'Graduation Eve'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header
                        as="a"
                        href="#solo"
                    >
                        Solo
                    </Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            as="a"
                            href="#promenade"
                            name='Une Promenade à travers le Metropolitan'
                            active={this.state.activeItem === 'Une Promenade à travers le Metropolitan'}
                            onClick={this.handleItemClick}
                        >
                            Une Promenade à travers le Metropolitan
                        </Menu.Item>
                        <Menu.Item
                            as="a"
                            href="#waltz5"
                            name='Waltz No. 5'
                            active={this.state.activeItem === 'Waltz No. 5'}
                            onClick={this.handleItemClick}
                        >
                            Waltz No. 5
                        </Menu.Item>
                        <Menu.Item
                            as="a"
                            href="#prelude2"
                            name='Prelude No. 2'
                            active={this.state.activeItem === 'Prelude No. 2'}
                            onClick={this.handleItemClick}
                        >
                            Prelude No. 2
                        </Menu.Item>
                        <Menu.Item
                            as="a"
                            href="#nocturne1"
                            name='Nocturne No. 1'
                            active={this.state.activeItem === 'Nocturne No. 1'}
                            onClick={this.handleItemClick}
                        >
                            Nocturne No. 1
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        </div>
    )
  }
}

export default CompMenu