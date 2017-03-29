import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
        <div>   
            <h1>Your Email Organized</h1>
            <h3>You can recategorize your senders or move them to your inbox by unchecking the box next to the senders name.</h3>
        </div>
    );
  }
}

export default SearchBar;