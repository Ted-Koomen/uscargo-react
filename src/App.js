import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavHeader from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Contact from './components/Contact/Contact'
class App extends Component {
  render() {
    return (
      <div className="container">
        <NavHeader/>
        <Content />
        <Contact />
      </div>
    )
  }
}

export default App;
