import React from 'react';
import './App.scss';
import Home from './Home';
import Content from './Content';
import About from './About';
import {Route, Switch, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className='App-nav'>
        <NavLink exact activeClassName='activeLink' to='/' className='App-navItem'>home</NavLink>
        <NavLink exact activeClassName='activeLink' to='/content' className='App-navItem'>content</NavLink>
        <NavLink exact activeClassName='activeLink' to='/about' className='App-navItem'>about</NavLink>
      </nav>
      <div className='wrapper'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/content' render={() => <Content someContent='nice Content!'/>}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/about/:name' render={(routeProps) => <About name={routeProps.match.params.name}/>}/> 
        </Switch>
        {/* Switch insures only one route is displayed. Matches with first match */}
        {/* put '/' route at the end!! or use EXACT */}
        {/* Genreally good idea to use Swtich and exact */}
      </div>
    </div>
  );
}

export default App;


