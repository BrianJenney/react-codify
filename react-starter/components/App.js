//we must import react to use it in our app
import React from 'react';

//this is our component which extends our react object
class App extends React.Component {

  //this is a function allows us to access the parents props or state
  //don't worry, we will cover state later

  //just know you will need to call this in order to access props or set state
  constructor(props){
    super(props)

    //state is our data being held in this component
    //in this case it will be our greeting
    this.state={greeting: 'Hello'};
  }

  //this is our render function where the action takes place!
  //this function returns some jsx (think javascript xml)
  //we put our variables in a curly bracket just like we do with angular
  //but with one bracket instead of two... because react!
   render() {
      return (
         <div>
            {this.state.greeting}
         </div>
      );
   }
}



export default App;

//we export our component so we can use it anywhere else in the App
//this modularity is what makes react so appealing to devs:
//you can write a presentational component and re-use it anywhere without
//reinventing the wheel
