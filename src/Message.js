import React, { Component } from 'react'
import './Message.scss'

class Message extends Component {
  render() {
    return(
      <div className='Message'>
        {this.props.children}
      </div>
    )
  }
}

export default Message