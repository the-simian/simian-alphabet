import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';


import {alphabetize} from './alphabet';

class App extends Component {


  componentDidMount(){
    alphabetize('Simian')
  }

  render() {
    return (
      <div className="App">
        <div className="frame">
          <svg width="800" height="500"></svg>
        </div>
      </div>
    );
  }
}

export default App;
