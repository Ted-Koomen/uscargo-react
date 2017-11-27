import React, { Component } from 'react';
import logo from './logo.svg';
import './css/small-business.css';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Contact from './components/Contact/Contact'
class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        <Content />
        <Contact />
      </div>
    )
  }
}

export default App;
