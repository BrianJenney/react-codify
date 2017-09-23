import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import Store from '../store';

const StoreInstance = Store();

//we import our component from our component folder to use here
import SignIn from './Login/SignIn';
import Register from './Profile/register';

ReactDOM.render(
  <Provider store={StoreInstance}>
    <Router>
      <div>
        <Route exact path="/" component={SignIn} />
        <Route path="/profile" component={Register} />
        {/* <Route path="/register" component={Register} /> */}
      </div>
    </Router >
  </Provider>,
  document.getElementById('app')
);
