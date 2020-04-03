import React, { Component } from 'react'
import './Page.scss'

class About extends Component {
  render(){
    return(
      <div className='About Page'>
        <div className='header'>
          <h4>/about</h4>
        </div>
        <div className='main'>
          <p>about page</p>
        </div>
      </div>
    )
  }
}

export default About;