//we must import react to use it in our app
import React from 'react';

//import our components
import Crime from './crime';

class Main extends React.Component {

   render() {
      return (
         <div>
           <Crime/>
         </div>
      );
   }
}

export default Main;
