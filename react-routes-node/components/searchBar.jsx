
import React from 'react';
import axios from 'axios';

import Articles from './articleResults';

class SearchBar extends React.Component{

constructor(props){
  super(props)
  this.state = {
                searchTerm: '',
                disabled : true
              }
            }

handleChange=(e)=>{
  this.setState({searchTerm : e.target.value,
                  disabled: false});
}

searchArticles=()=>{
  axios.get('http://localhost:8081/test').then((response)=>{
    console.log(response);
  })
}

render(){
  return(
    <div>

     <div className="col-lg-6">
       <div className="input-group">
         <input
           type="text"
           className="form-control"
           placeholder="Search for..."
           onChange={this.handleChange.bind(this)}/>
         <span className="input-group-btn">
           <button
             disabled={this.state.disabled}
             className="btn btn-primary"
             type="button"
             onClick={this.searchArticles}>Go!</button>
         </span>
       </div>
     </div>

    </div>
  )
}

}

export default SearchBar;
