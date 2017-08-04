

import React from 'react';

class Articles extends React.Component{

constructor(props){
  super(props)
}

renderArticles=()=>{
  return(
    this.props.articles.map((article)=>{
      return(
        <li
          key={article._id}>{article.web_url}</li>
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
