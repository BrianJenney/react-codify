import React from 'react';
import axios from 'axios';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/login';

class AddProp extends React.Component {

  constructor(props){
    super(props)

    this.state={
      disabled: false,
      imgUrl: '',
      disabled: true,
      price: 0,
      city:'',
      state: '',
      zip:0
    }
  }

  onChange=(e)=>{
    let picInfo = {};
    picInfo[e.target.id] = e.target.value;
    this.setState(picInfo);
  };

  submitPic=()=>{

    console.log(this.props.id);

    const picItem = {
      userid: this.props.id,
      imgUrl: this.state.imgUrl,
      price: this.state.price,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip 
    }

    axios.post("http://localhost:8081/api/pics/upload/", picItem).then(function(response){
      console.log(response.data);
    });
  };

   render() {
     
      return (

        
         <div>

            <div className="text-center">
              <img src={this.state.imgUrl} alt="Upload a Pic of Your House"/>
            </div>
            <div className="col-md-6 col-md-offset-3">
              <TextField
              floatingLabelText="Enter a URL"
              onChange={this.onChange.bind(this)}
              fullWidth={true}
              type="string"
              id="imgUrl"/>

              <br/>

              <TextField
              floatingLabelText="Price"
              onChange={this.onChange.bind(this)}
              fullWidth={true}
              type="number"
              id="price"/>

              <br/>
              <TextField
              floatingLabelText="City"
              onChange={this.onChange.bind(this)}
              fullWidth={true}
              type="text"
              id="city"/>

              <br/>

              <TextField
              floatingLabelText="State"
              onChange={this.onChange.bind(this)}
              fullWidth={true}
              type="text"
              id="state"/>

              <br/>

              <TextField
              floatingLabelText="Zip"
              onChange={this.onChange.bind(this)}
              fullWidth={true}
              type="number"
              id="zip"/>

              <RaisedButton 
              primary={true}
              label="Add Property"
              onClick={this.submitPic}
              disabled={this.state.price < 1 || this.state.city.length < 1 || this.state.zip.toString().length < 5 || this.state.imgUrl.length < 3}/>
                
            </div>
         </div>
      );
   }
}

function mapStateToProps(state){
    return {
        id: state.loggedIn.id
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProp);

