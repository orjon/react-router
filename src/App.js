import React from 'react';
import './App.scss';
import Homepage from './Homepage';
import Content from './Content';
import About from './About';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className='App-nav'>
        <a className='App-navItem'>homepage</a>
        <a className='App-navItem'>content</a>
        <a className='App-navItem'>about</a>
      </nav>
      <div className='wrapper'>
        <Switch>
          {/* Switch insures only one route is displayed. Matches with first match */}
          <Route exact path='/' component={Homepage}/>
          {/* put '/' route at the end!! or use EXACT */}
          <Route exact path='/content' component={Content}/>
          <Route exact path='/about' component={About}/> 
        </Switch>
        {/* Genreally good idea to use Swtich and exact */}
      </div>
    </div>
  );
}

export default App;


