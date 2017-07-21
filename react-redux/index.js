import React from 'react';
import ReactDOM from 'react-dom';

//we import our component from our component folder to use here
import Main from './components/main';

//import react-redux stuff to pass state into our components
import { Provider } from 'react-redux';
import configureStore from './store';

//using the react-dom render method, we access our html and
//attach our react app at this connection point

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>
  ,
  document.getElementById('app')
);
