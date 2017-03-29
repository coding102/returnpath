import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import FilterSearchBar from './components/FilterSearchBar';
import TableHeader from './components/TableHeader';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FilterSearchBar />
        <TableHeader />
      </div>
    );
  }
}

export default App;
