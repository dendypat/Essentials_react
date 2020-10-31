import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {

  render() {
    return (
      <div className="contactContainer">
        <h2>Contact /Us</h2>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <span className="text">Name</span>
              <input type="text" name="name"></input>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <span className="text">Email</span>
              <input type="text" name="email" required="true"></input>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <span className="text">Message</span>
            <input type="textarea" rows="6" required="required"></input>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <input type="submit" value="Send"></input>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
