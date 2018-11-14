import React, { Component } from 'react';
import Home from './Home.js';
import './App.css';
import uuidv1 from 'uuid/v1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <ul>
              <li>
                <a className="link" href="https://edm-dashboard.herokuapp.com" target="_blank">Go to Dashboard</a>
              </li>
            </ul>
          </nav>
        </div>
        <Home uuid={uuidv1()}/>
      </div>
    );
  }
}

export default App;
