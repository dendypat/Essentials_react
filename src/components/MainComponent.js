import React, { Component } from 'react';
import Navbar from './Navbar/Navbar'
import Home from './Home/HomeComponent';
import Contact from './Contact/ContactComponent';
import Footer from './Footer/FooterComponent';

class Main extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
          <div className="container">
            <Navbar />
            <Home />
            <Contact />
            <Footer />
          </div>
    )
  }
}

export default Main;
