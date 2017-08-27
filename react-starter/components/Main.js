//we must import react to use it in our app
import React from 'react';

import HelloWorld from './HelloWorld';

class Main extends React.Component {

   render() {
      return (
         <div className='jumbotron'>
            <HelloWorld/>
         </div>
      );
   }
}

export default Main;

