import React, { Component } from 'react';
import './Page.scss';
import Message from './Message';

class Content extends Component {
  render(){
    return(
      <div className='Content Page'>
        <div className='header'>
          <h4>/content</h4>
        </div>
        <div className='main'>
          <Message>
            <p>The content here is: {this.props.someContent}</p>
          </Message>
        </div>
      </div>
    )
  }
}

export default Content;