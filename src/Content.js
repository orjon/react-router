import React, { Component } from 'react';
import './Page.scss'

class Content extends Component {
  render(){
    return(
      <div className='Content Page'>
        <div className='header'>
          <h4>/content</h4>
        </div>
        <div className='main'>
          <p>The content here is: {this.props.someContent}</p>
        </div>
      </div>
    )
  }
}

export default Content;