import React from 'react';
import './App.scss';
import Home from './Home';
import Content from './Content';
import About from './About';
import NavBar from './NavBar';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='wrapper'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/content' render={() => <Content someContent='nice Content!'/>}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/about/:name' render={(routeProps) => <About {...routeProps}/>}/> 
          <Route render={() => <h1>Error: NOT FOUND</h1>}/>
        </Switch>
        {/* Switch insures only one route is displayed. Matches with first match */}
        {/* put '/' route at the end!! or use EXACT */}
        {/* Genreally good idea to use Swtich and exact */}
      </div>
    </div>
  );
}

export default App;


