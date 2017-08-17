import React from 'react';
import ReactDOM from 'react-dom';

//we import our component from our component folder to use here
import Greeting from './components/App.js';

//using the react-dom render method, we access our html and
//attach our react app at this connection point
ReactDOM.render(<Greeting />, document.getElementById('app'));
