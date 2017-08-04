
import React from 'react';
import axios from 'axios';

import Articles from './articleResults';

class SearchBar extends React.Component{

constructor(props){
  super(props)
  this.state = {
                searchTerm: '',
                articles: [],
                apiKey : 'fbb07d1a4e4f6f90c4509b27c2bc6938:9:73594931',
                disabled : true
              }
            }

handleChange=(e)=>{
  this.setState({searchTerm : e.target.value});
}

searchArticles=()=>{
  axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + this.state.searchTerm + '&api-key=' + this.state.apiKey).then((response)=>{
    this.setState({articles: response.data.response.docs});
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

      <Articles articles={this.state.articles} />
    </div>
  )
}

}

export default SearchBar;
