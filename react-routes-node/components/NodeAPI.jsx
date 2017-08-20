
import React from 'react';
import axios from 'axios';

class NodeAPI extends React.Component{

constructor(props){
  super(props)
}

myApi=()=>{
  axios.get('http://localhost:8081/test').then((response)=>{
    console.log(response);
  })
}

render(){
  return(
    <div>

     <div className="col-lg-6">
       <div className="input-group">
         <span className="input-group-btn">
           <button
             className="btn btn-primary"
             type="button"
             onClick={this.myApi}>Go!</button>
         </span>
       </div>
     </div>

    </div>
  )
}

}

export default NodeAPI;
