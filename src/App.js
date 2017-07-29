import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';


import {alphabetize} from './alphabet';

class App extends Component {

  state={
    message:'ssssss'
  }

  componentDidMount(){

    alphabetize(this.state.message)

    setTimeout(() => {
      this.setState({
        message: 'i'
      })
    },2500)


    setTimeout(() => {
      this.setState({
        message: 'SCrmSi'
      })
    },5000)

    setTimeout(() => {
      this.setState({
        message: 'SimianCraft'
      })
    },7500)

  }

  componentDidUpdate(){
    alphabetize(this.state.message)
  }

  render() {
    return (
      <div className="App">
        <div className="frame">
          <svg width="1280" height="600"></svg>
        </div>
      </div>
    );
  }
}

export default App;
