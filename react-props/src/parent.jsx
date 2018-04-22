

import React from 'react';

//import the child component here
import Child from './child';

class Parent extends React.Component{

//this is where we initialize the state or data for this component
//we're gonna pass this data down to the child in our render method
constructor(props){
  super(props)
  this.state = {
    kidName: 'Kiddo',
    age: 5,
    faveFood: 'Spaghetti Tacos'
  }
}

//we will give this little guy (the child) some state from our parent component
//in an xml-ish type of way:

render(){
  return(
    <div>
      <h1>Hey, I'm the father here son, take some state from me!</h1>
      <Child
        name = {this.state.kidName}
        age = {this.state.age}
        faveFood = {this.state.faveFood}/>
    </div>
  )
}

}

export default Parent;
