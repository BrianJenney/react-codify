
import React from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/login';
import { createHashHistory } from 'history';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const history = createHashHistory();

class SignIn extends React.Component{

constructor(props){
  super(props)

  this.state = {
    income:0,
    SSN:0,
    userType: '',
    email: '',
    password: '',
    error: '',
    display: 'none'
  };
};

onChange=(e)=>{
  let user = {};
  user[e.target.id] = e.target.value;
  this.setState(user);
};

submitUser=()=>{

  axios.post('http://localhost:8081/api/user/login/', this.state).then((response)=>{
    if(typeof response.data.errors !== `undefined`){ 
      this.setState({error: response.data.message});
      return;
    }

    console.log(response);
  
    const user={
      isLogged: true,
      name: this.state.email,
      id: response.data[0]._id
    };

    this.props.actions.login(user); 
    this.props.history.push("/nav");

  })
};

showRegister=()=>{
  if(this.state.display === 'block')
    this.setState({display: 'none'});
  else
    this.setState({display: 'block'});
};


render(){
  return(
    <div>

     <div className="col-xs-6 col-xs-offset-3">
        <br/>
        <br/>

        <TextField
            floatingLabelText="Email"
            onChange={this.onChange.bind(this)}
            fullWidth={true}
            id="email"
            type="text"/>

        <br/>

        <TextField
          floatingLabelText="Password"
          onChange={this.onChange.bind(this)}
          fullWidth={true}
          id="password"
          maxLength="8"
          type="password"/>

          <br/>
          <br/>
          <span 
          style={{marginTop: 30}}
          onClick={this.showRegister}>New User?</span>

          <br/>

        <div style={{display: this.state.display}}>

          <TextField
            floatingLabelText="SSN"
            onChange={this.onChange.bind(this)}
            fullWidth={true}
            id="SSN"
            maxLength="8"
            type="password"/>

          <br/>

          <TextField
            floatingLabelText="Income"
            onChange={this.onChange.bind(this)}
            fullWidth={true}
            type="number"
            id="income"/>

          <br/>
          <br/>

          <RadioButtonGroup name="buyerType" defaultSelected="not_light">
          <RadioButton
            onClick={this.onChange.bind(this)}
            id="userType"
            value="buyer"
            label="Buyer"
          />
          <RadioButton
            onClick={this.onChange.bind(this)}
            id="userType"
            value="seller"
            label="Seller"
          />
        </RadioButtonGroup>

        </div>

        <p>{this.state.error}</p>

        <RaisedButton 
          primary={true}
          disabled={this.state.password.length < 1 ||
          this.state.email.length < 1}
          onClick={this.submitUser}
          label="Enter"/>
      </div>

    </div>
  )
}

}

function mapStateToProps(state){
  console.log(state);
    return {
        id: state.loggedIn.id
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

