import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content/Content'
import Contact from './components/Contact/Contact'
import Slider from './components/Slider/Slider'
import HomePage from './HomePage'
import Navbar from './components/Navbar/Navbar'
import LTL from './pages/LTL'
import FTL from './pages/FTL'
import Sea from './pages/Sea'
import Air from './pages/Air'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/ltl" component={LTL}/>
          <Route path="/ftl" component={FTL}/>
          <Route path="/sea" component={Sea}/>
          <Route path="/air" component={Air}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </div>
      </Router>
    )
  }
}

export default App;
