
import React from 'react';
import axios from 'axios';

class Child extends React.Component{

constructor(props){
  super(props)
  this.state = {crime: []};
  console.log(props);
}

//this function tells react to wait until the component is mounted (rendered)
//before firing off our http request
componentDidMount=()=>{
  const self = this;

  axios.get('https://data.sfgov.org/resource/gxxq-x39z.json?pddistrict=MISSION&dayofweek=Friday&$order=date%20DESC&$where=date%3E%272017-01-01T12:00:00%27&category=DRUG/NARCOTIC').then(function(response){
    self.setState({crime: response.data});
  })

}

//we pass in i in the render method (the index) to prevent duplicate keys
//if you are not familiar with map.. LOOK IT UP!!!
render(){
  return(
    <div>
      <p>Render Data Here</p>
        {this.state.crime.map(function(stat, i){
          return(
            <p key={i}>{stat.address} {stat.date}</p>
          )
        })}
    </div>
  )
}

}

export default Child;
