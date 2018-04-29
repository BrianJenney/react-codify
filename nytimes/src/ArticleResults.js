
import React, { Component } from 'react';

class Articles extends Component{

constructor(props){
  super(props)
}

renderArticles=()=>{
  return(
    this.props.articles.map((article)=>{
      return(
        <li
          key={article._id}><a href={article.web_url}>{article.web_url}</a></li>
      )
    })
  )
}

render(){
  return(
    <div>
      {this.renderArticles()}
    </div>
  )
}

}

export default Articles;
