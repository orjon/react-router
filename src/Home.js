import React, { Component } from 'react'
import './Page.scss'

class Home extends Component {
  render(){
    return(
      <div className='Home Page'>
        <div className='header'>
          <h4>/home</h4>
        </div>
        <div className='main'>
          <p>home page</p>
        </div>
      </div>
    )
  }
}

export default Home;