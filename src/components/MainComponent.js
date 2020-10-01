import React, { Component } from 'react';
import Navbar from './Navbar/Navbar'
import Home from './Home/HomeComponent';
import Contact from './Contact/ContactComponent';

class Main extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
          <div className="container">
            <Navbar />
            <Home />
          </div>
    )
  }
}

export default Main;
