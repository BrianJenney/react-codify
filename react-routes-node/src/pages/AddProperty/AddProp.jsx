import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/login';

class AddProp extends React.Component {

  constructor(props){
    super(props)

    this.state={
      imgurl: '',
      disabled: true,
      price: 0,
      city:'',
      state: '',
      zip:0
    }
  }

   render() {
     console.log(this.props);
      return (
         <div>
            <div className="col-md-6 col-md-offset-3">

              <img src={this.state.imgurl}/>

              <input 
              className="form-control"
              type="text"></input>

              <br/>
              <br/>

              <RaisedButton label="Add"/>
                
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

