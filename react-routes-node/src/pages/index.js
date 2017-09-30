import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import Store from '../store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const StoreInstance = Store();

//we import our component from our component folder to use here
import SignIn from './Login/SignIn';
import AddProp from './AddProperty/AddProp';
import Nav from './Nav/NavPage';
import Listings from './Listings/BrowseHomes';

ReactDOM.render(
  <MuiThemeProvider>
  <Provider store={StoreInstance}>
    <Router>
      <div>
        <Route exact path="/" component={SignIn} />
        <Route path="/addproperty" component={AddProp} />
        <Route path="/nav" component={Nav} /> 
        <Route path="/listings" component={Listings}/>
      </div>
    </Router >
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
