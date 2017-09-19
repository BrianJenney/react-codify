
import React from 'react';
import axios from 'axios';
import { createHashHistory } from 'history'

const history = createHashHistory();

class SignIn extends React.Component{

constructor(props){
  super(props)

  this.state = {
    password: '',
    username: '',
    error: '' 
  }
};

onChange =(e)=>{
  let user = {};
  user[e.target.id] = e.target.value;
  this.setState(user);
};

submitUser=()=>{
  
  axios.post('http://localhost:8081/api/user/createuser/' + this.state).then((response)=>{
    if(typeof response.data.errors !== `undefined`){ 
      console.log(response.data.message);
      this.setState({error: response.data.message});
    }else{
      this.props.history.push(`/about`)
    }
  })
};

render(){
  return(
    <div>

     <div className="col-lg-6">
       <div className="input-group">

        <input 
        id="username"
        onChange={this.onChange.bind(this)}
        className="form-control" 
        placeholder="userName">
        </input>

        <input 
        id="password"
        onChange={this.onChange.bind(this)}
        className="form-control" 
        placeholder="passWord">
        </input>
        
        </div>

        <p>{this.state.error}</p>

        <button
            className="btn btn-primary"
            type="button"
            onClick={this.submitUser}>Go!</button>
     </div>

    </div>
  )
}

}

export default SignIn;
