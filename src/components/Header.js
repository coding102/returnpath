import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render() {
    return (
        <div className="header">   
            <h1>Your Email Organized</h1>
            <h3>You can recategorize your senders or move them to your inbox by unchecking the box next to the senders name.</h3>
        </div>
    );
  }
}

export default Header;