
import React from 'react';

class Child extends React.Component{

//this is when the constructor function helps us out by
//giving access to the props or state from the parent
constructor(props){
  super(props)
}


//the props must match the xml-ish attributes we passed from the parent
//don't forget, all components must be wrapped in a div - it's the React way!!!
render(){
  return(
    <div>
      <h2>Hey, I'm the child</h2>
      <p>Here's some info from my parent:</p>
      <ul>
        <li>My age: {this.props.age}</li>
        <li>My name: {this.props.kidName}</li>
        <li>My favorite food: {this.props.faveFood}</li>
      </ul>
    </div>
  )
}

}

export default Child;
