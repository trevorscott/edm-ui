import React, { Component } from 'react';
import Home from './Home.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <ul>
              <li>
                <a className="link" href="#">Go to Dashboard</a>
              </li>
            </ul>
          </nav>
        </div>
        <Home/>
      </div>
    );
  }
}

export default App;
