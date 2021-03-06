import React, { Component } from 'react';
import './Page.scss';
import Message from './Message';

class About extends Component {
  static defaultProps ={
    name: '(try adding a name to path)'
  }
  render(){
    const name = this.props.match.params.name || this.props.name
    return(
      <div className='About Page'>
        <div className='header'>
          <h4>/about</h4>
        </div>
        <div className='main'>
          <Message>
            <p>about: {name}</p>
          </Message>
        </div>
      </div>
    )
  }
}

export default About;