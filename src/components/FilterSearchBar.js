import React, { Component } from 'react';
import './FilterSearchBar.css';

class FilterSearchBar extends Component {
  render() {

    return (
      <div className="filterWindow">   
          <select >
            <option>Show All</option>
            <option>Read</option>
            <option>Unread</option>
          </select>

          <div className="cell">
            <input type="search" placeholder="Search for a sender..." />
          </div>
      </div>
    );
  }
}

export default FilterSearchBar;