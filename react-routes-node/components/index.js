import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
//we import our component from our component folder to use here
import SignIn from './Login/SignIn';
import Child from './ManageStudents/child';

ReactDOM.render(
  <Router>
    <div>
       <Route exact path="/" component={SignIn} />
       <Route path="/about" component={Child} />
     </div>
  </Router >,
  document.getElementById('app')
);
