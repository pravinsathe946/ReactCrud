import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Outlet, NavLink  } from "react-router-dom";


export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <><Menu > 
        <Menu.Item 
                  as={NavLink} to="/"
          name='Create'
          active={activeItem === 'Create'}
          onClick={this.handleItemClick}
        >

        </Menu.Item>

        <Menu.Item
         as={NavLink} to="/ReadRecord"
          name='Read'
          active={activeItem === 'Read'}
          onClick={this.handleItemClick}
        >

        </Menu.Item>

      </Menu><Outlet /></>            
    )
  }
}
