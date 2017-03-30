import React, { Component } from 'react';
import './TableHeader.css';
var data = require('./data');

class TableHeader extends Component {
  render() {

    for(var i = 0; i < data.length; i++) {
    var obj = data[i];

    console.log(obj.organize + ", " + obj.sender + ", " + obj.domain + ", " + obj.email + ", " + obj.folder);
  }

    return (
      <div className="container">

        <table className="table">
          <thead>
            <tr>
                <th style={{height: '50px'}}>Organize</th>
                <th style={{height: '50px'}}>Sender</th>
                <th style={{height: '50px'}}>Domain</th>
                <th style={{height: '50px'}}>Email</th>
                <th style={{height: '50px'}}>Folder</th>
            </tr>

          </thead>
          <tbody>
            <tr>
                <th>
                  <input type="checkbox" name="" value="" />
                </th>

                <th style={{backgroundColor: 'white'}}>Sender</th>
                <th style={{backgroundColor: 'white'}}>Domain</th>
                <th style={{backgroundColor: 'white'}}>Email</th>
                <th style={{backgroundColor: 'white'}} className="bordercolor">
                  <select style={{height: '30px', width: '100%'}}>
                    <option>Travel</option>
                    <option>Shopping</option>
                    <option>Finance</option>
                  </select>
                </th>
            </tr>
          </tbody>


             
            
        </table>
      </div>
    );
  }
}

export default TableHeader;