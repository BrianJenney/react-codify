

import React from 'react';

//import the child component here
import Child from './child';

class Parent extends React.Component{

constructor(props){
  super(props)
}

//we will give this little guy (the child) some state from our parent component
//in an xml-ish type of way:

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
