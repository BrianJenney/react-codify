import React from 'react';
import ReactDOM from 'react-dom';

//we import our component from our component folder to use here
import Main from './components/Main.js';

//using the react-dom render method, we access our html and
//attach our react app at this connection point
ReactDOM.render(<Main />, document.getElementById('app'));
