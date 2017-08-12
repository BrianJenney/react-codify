import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
//we import our component from our component folder to use here
import Main from './components/main';
import Child from './components/child';

//using the react-dom render method, we access our html and
//attach our react app at this connection point


ReactDOM.render(
  <Router>
    <div>
       <Route exact path="/" component={Main} />
       <Route path="/about" component={Child} />
     </div>
  </Router >,
  document.getElementById('app')
);
