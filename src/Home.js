import React, { Component } from 'react';
import './Page.scss';
import Message from './Message';

class Home extends Component {
  render(){
    return(
      <div className='Home Page'>
        <div className='header'>
          <h4>/home</h4>
        </div>
        <div className='main'>
          <Message>
            <p>home page</p>
          </Message>
        </div>
      </div>
    )
  }
}

export default Home;