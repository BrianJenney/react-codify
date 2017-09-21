import React from 'react';

class Register extends React.Component {

   render() {
      return (
         <div>
            <div className="col-md-6 col-md-offset-3">
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">SSN</span>
                <input 
                id="SSN"
                maxLength="8"
                type="password"
                className="form-control" 
                placeholder="ex: 12345678">
                </input>
              </div>

              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">INCOME</span>
                <input 
                type="number"
                id="income"
                className="form-control" 
                placeholder="income">
                </input>
              </div>

              <button className="btn btn-primary">Submit</button>
                
            </div>
         </div>
      );
   }
}

export default Register;
