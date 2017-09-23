
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
    income:0,
    SSN:0,
    userType: '',
    password: '',
    error: '',
    display: 'none'
  }
};

onChange=(e)=>{
  let user = {};
  user[e.target.id] = e.target.value;
  this.setState(user);
};

submitUser=()=>{
  axios.post('http://localhost:8081/api/user/registeruser/', this.state).then((response)=>{
    if(typeof response.data.errors !== `undefined`){ 
      this.setState({error: response.data.message});
    }
    console.log(response);
    
    //get whether user is new or returning
    const userType = response.data.userType;
  })
};

showRegister=()=>{
  console.log(this.state.display);
  if(this.state.display === 'block')
    this.setState({display: 'none'})
  else
    this.setState({display: 'block'})
};


render(){
  return(
    <div>

     <div className="col-xs-6 col-xs-offset-3">
        <br/>
        <br/>
        <div className="input-group">
            <span className="input-group-addon" 
            id="basic-addon1">Email</span>
            <input 
            onChange={this.onChange.bind(this)}
            id="email"
            type="text"
            className="form-control">
            </input>
        </div>

        <br/>

        <div className="input-group">
            <span className="input-group-addon" 
            id="basic-addon1">Password</span>
            <input 
            onChange={this.onChange.bind(this)}
            id="password"
            maxLength="8"
            type="password"
            className="form-control">
            </input>
          </div>

          <br/>

          <span 
          onClick={this.showRegister}>New User?</span>

          <br/>

        <div style={{display: this.state.display}}>

         <div className="input-group">
            <span className="input-group-addon" 
            id="basic-addon1">SSN</span>
            <input 
            onChange={this.onChange.bind(this)}
            id="SSN"
            maxLength="8"
            type="password"
            className="form-control" 
            placeholder="ex: 12345678">
            </input>
          </div>

          <br/>

          <div className="input-group">
            <span className="input-group-addon" 
            id="basic-addon1">Income</span>
            <input 
            onChange={this.onChange.bind(this)}
            type="number"
            id="income"
            className="form-control">
            </input>
          </div>

          <br/>

          <div className="radio">
            <label><input type="radio" name="optradio"></input>Buyer</label>
          </div>
          <div className="radio">
            <label><input type="radio" name="optradio"></input>Seller</label>
          </div>

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

function mapStateToProps(state){
    return {
        cart: state.login
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

