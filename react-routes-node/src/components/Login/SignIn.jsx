
import React from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/login';
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
  axios.post('http://localhost:8081/api/user/verify/', this.state).then((response)=>{
    if(typeof response.data.errors !== `undefined`){ 
      this.setState({error: response.data.message});
    }
    
    //get whether user is new or returning
    const userType = response.data.userType;

    userType === 'new' ? this.props.history.push(`/profile`) : this.props.history.push(`/properties${userType}`);

  })
};

render(){
  return(
    <div>

     <div className="col-lg-6 col-md-offset-3">
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

function mapStateToProps(state, props) {
    return {
        login: state.login
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

