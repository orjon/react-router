# React-Router example
## Experiments with React

Simple demo app using react-router.

Default page found at `/`:
![Screen shot](/screenshots/screenshot-home.png)

Content page `/content`:
![Screen shot](/screenshots/screenshot-content.png)

About page with pattern `/about/:name`:
![Screen shot](/screenshots/screenshot-about.png)


### NavBar
With back button using: `this.props.history.goBack()`

```
import React, { Component } from 'react';
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
```

### Content
Using content passed in as prop: `<Route exact path='/content' render={() => <Content someContent='nice Content!'/>}/>`

```
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
```

### About
Uses URL pattern/variable for content: `<Route exact path='/about/:name' render={(routeProps) => <About {...routeProps}/>}/> `

```
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
```

