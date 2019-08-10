import React, { Component } from 'react';
import './App.css';
import Skilllist from './components/Skilllist.js';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Location List</h1>
              <Skilllist />
          </header>
        </div>
    );
  }
}

export default App;
