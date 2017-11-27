import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Contact from './components/Contact/Contact'
import Slider from './components/Slider/Slider'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Slider/>
        <div className="container">
          <Content />
          <Contact />
        </div>
      </div>
    )
  }
}

export default App;
