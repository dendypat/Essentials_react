import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import Home from '../Home/HomeComponent';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
  state = { clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return (

      <nav className="NavbarItems sticky-top">
        <h1 className="navbar-logo"><a href={Home} sr-only="Home"></a><i className="fa fa-gem"></i>Essentials</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return(
                <li key={index}>
                  <a className={item.cName} href={item.url} sr-only={item.title}>
                {item.title}
                  </a>
                </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}
export default Navbar
