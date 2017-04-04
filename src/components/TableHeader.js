import React, { Component } from 'react';
import './TableHeader.css';
import localdata from './data';

class TableHeader extends Component {
    render() {

    for(var i = 0; i < localdata.length; i++) {
    var obj = localdata[i];

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
                <td>
                  <input type="checkbox" name="" value="" />
                </td>

                {<td style={{backgroundColor: 'white'}}>
                  {obj.sender}
                </td>}


                <td style={{backgroundColor: 'white'}}>{obj.domain}</td>
                <td style={{backgroundColor: 'white'}}>{obj.email}</td>
                <td style={{backgroundColor: 'white'}} className="bordercolor">
                  <select style={{height: '30px', width: '100%'}}>
                    <option>Travel</option>
                    <option>Shopping</option>
                    <option>Finance</option>
                  </select>
                </td>
            </tr>
          </tbody>

        </table>
      </div>
    );
  }
}

export default TableHeader;