//we must import react to use it in our app
import React from 'react';

import HelloWorld from './HelloWorld';

class Main extends React.Component {

   render() {
      return (
          <div>

            <div className='jumbotron'>
                <HelloWorld/>
            </div>
            
          </div>
      );
   }
}

export default Main;

