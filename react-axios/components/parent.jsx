

import React from 'react';

//TODO: Here is where you will want to add your search bar and a button to fire off the API request
//HINT: pass down the data you get back from the API request to your child component to render it

//import the child component here
import Child from './child';

class Parent extends React.Component{

constructor(props){
  super(props)
}


render(){
  return(
    <div>
      <h1>Parent Container</h1>
      <Child/>
    </div>
  )
}

}

export default Parent;
