import React, { Component } from 'react';
import './TableHeader.css';

class TableHeader extends Component {
  render() {
    return (
        <div>   
            <h1>Your Email Organized</h1>
            <h3>You can recategorize your senders or move them to your inbox by unchecking the box next to the senders name.</h3>
        </div>
    );
  }
}

export default TableHeader;