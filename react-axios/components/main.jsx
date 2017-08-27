//we must import react to use it in our app
import React from 'react';

//import our components
import Crime from './crime';

//this is our component which extends our react object
class Main extends React.Component {

   render() {
      return (
         <div>
           <Crime/>
         </div>
      );
   }
}

//we export our component so we can use it anywhere else in the App
//this modularity is what makes react so appealing to devs:
//you can write a presentational component and re-use it anywhere without
//reinventing the wheel
export default Main;
