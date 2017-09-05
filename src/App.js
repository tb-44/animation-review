import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidenav from './Sidenav';
const svg = require('./assets/hamburger.svg');

class App extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      showSubMenu: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleSubMenu = this.toggleSubMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  toggleSubMenu() {
    this.setState({
      showSubMenu: !this.state.showSubMenu
    })
  }
  render() {
    return (
      <div className="App">
        <button className="logo" onClick={() => this.toggleMenu()}><img src={svg} alt=""/></button>
        <Sidenav toggleMenu={this.toggleMenu}
                showMenu={this.state.showMenu}
                toggleSubMenu={this.toggleSubMenu}
                showSubMenu={this.state.showSubMenu}/>
      </div>
    );
  }
}

export default App;
