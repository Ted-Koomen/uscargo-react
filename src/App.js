import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content/Content'
import Contact from './components/Contact/Contact'
import Slider from './components/Slider/Slider'
import HomePage from './HomePage'
import UserShow from './pages/UserShow/UserShow'
import Navbar from './components/Navbar/Navbar'
import NotFound from './pages/NotFound/NotFound'
import LTL from './pages/LTL/LTL'
import FTL from './pages/FTL/FTL'
import Sea from './pages/Sea/Sea'
import Air from './pages/Air/Air'
import ContactPage from './pages/ContactPage/ContactPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Greeting from './pages/Greeting/Greeting'
import Footer from './components/Footer/Footer'
import ScrollToTop from './ScrollToTop'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    {console.log(this.props.store)}
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <ScrollToTop>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/ltl" component={LTL}/>
            <Route path="/ftl" component={FTL}/>
            <Route path="/sea" component={Sea}/>
            <Route path="/air" component={Air}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/users/:access_token" component={Greeting} />
            <Route component={NotFound} />
          </Switch>
          <Footer/>
          </ScrollToTop>
        </div>
      </Router>
    )
  }
}

export default App;
