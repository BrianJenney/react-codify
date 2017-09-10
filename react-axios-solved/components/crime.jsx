
import React from 'react';
import axios from 'axios';

//TODO: Refactor this API request so that it takes in a user's input and fires off on a button click
//You will need to remove the axios request from here and put it in your parent component
//then pass down the state to this component -- feel free to rename components as well!

class Crime extends React.Component{

//this is when the constructor function helps us out by
//giving access to the props or state from the parent
constructor(props){
  super(props)
  this.state = {
    crime: [],
    type: 'DRUG/NARCOTIC'};
}

optionChange=(e)=>{
  console.log(e.target.value);
  this.setState({type: e.target.value});
}

crimeApi=()=>{
  const self = this; //set this here as it will change its reference when inside our http request
  axios.get('https://data.sfgov.org/resource/gxxq-x39z.json?pddistrict=MISSION&dayofweek=Friday&$order=date%20DESC&$where=date%3E%272017-01-01T12:00:00%27&category=' + this.state.type).then(function(response){
    self.setState({crime: response.data});
  })
}

//we pass in i in the render method (the index) to prevent duplicate keys
//if you are not familiar with map.. LOOK IT UP!!!
render(){
  return(
    <div>
      <div onChange={this.optionChange.bind(this)}>
      
        <p>TYPE OF CRIME:</p>

        <input 
          checked={this.state.type === 'VANDALISM'} 
          type="radio" name="offense" 
          value="VANDALISM"/>VANDALISM
        <br/>
        <input 
          checked={this.state.type === 'ROBBERY'} 
          type="radio" name="offense" 
          value="ROBBERY"/>ROBBERY
        <br/>
          <input 
          checked={this.state.type === 'DRUG/NARCOTIC'} 
          type="radio" name="offense" 
          value="DRUG/NARCOTIC" />DRUG/NARCOTIC
        <br/>
        <input 
          checked={this.state.type === 'VEHICLE THEFT'} 
          type="radio" name="offense" 
          value="VEHICLE THEFT"/>VEHICLE THEFT
        <br/>
        <input 
          checked={this.state.type === 'ASSAULT'} 
          type="radio" name="offense" 
          value="ASSAULT"/>ASSAULT
        <br/>

        <button 
          onClick={this.crimeApi} 
          className="btn btn-primary">Find Crime
        </button>

      </div>

      <div>
          {this.state.crime.map(function(stat, i){
            return(
              <p key={i}>{stat.address} {stat.date}</p>
            )
          })}
      </div>
    </div>

    
  )
}

}

export default Crime;
