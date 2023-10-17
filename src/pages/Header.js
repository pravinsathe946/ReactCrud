import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Outlet, Link } from "react-router-dom";


export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <><Menu > 
        <Menu.Item 
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          <Link className='nav' to="/">Create</Link>&nbsp;&nbsp;

        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
             <Link className='nav' to="/ReadRecord">Read</Link>

        </Menu.Item>

      </Menu><Outlet /></>            
    )
  }
}
