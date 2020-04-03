import React, { Component, createContext } from 'react';
import './NavBar.scss';
import {withRouter, NavLink} from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack(){
    this.props.history.goBack();
  }
  render(){
    return(
      <nav className='App-nav'>
        <span className='App-navItem' onClick={this.handleBack}>←</span>
        <NavLink exact activeClassName='activeLink' to='/' className='App-navItem'>home</NavLink>
        <NavLink exact activeClassName='activeLink' to='/content' className='App-navItem'>content</NavLink>
        <NavLink exact activeClassName='activeLink' to='/about' className='App-navItem'>about</NavLink>
      </nav>
    )
  }
}

export default withRouter(NavBar);