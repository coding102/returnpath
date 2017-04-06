import React, { Component } from 'react';
import './TableHeader.css';
import localdata from './data';

class TableHeader extends Component {
    render() {
  
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
          { localdata.map(obj => {
            return (
              <tr key={ obj.email } >
                <td>
                  <input type="checkbox" name="" value="" />
                </td>

                <td style={{backgroundColor: 'white'}}>
                  {obj.sender}
                </td>


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
            )

          })

          }
          </tbody>

        </table>
      </div>
    );
  }
}

export default TableHeader;