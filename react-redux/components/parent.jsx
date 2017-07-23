
import React from 'react';

import Child from './child';

import { connect } from 'react-redux';
import { addLink } from '../actioncreators/actioncreator';
import { addComment } from '../actioncreators/actioncreator';

class Parent extends React.Component{

constructor(props){
  super(props)
  this.props.addLink('http://mylink.com');
}


render(){
  return(
    <div>
      <h1>Parent Container</h1>
      <Child childState={this.props.votes}/>
    </div>
  )
}

}

//this is doing what the name implies:
//it's giving the state defined in our reducers to the components
const mapStateToProps = (state) => {
    return {
        votes: state.votes,
        links: state.addToList
    };
};


//this dispatches the action to the reducer and not directly from the component
//adds more abstraction from the UI and that's what react is all about!
const mapDispatchToProps = (dispatch) => {
    return {
        addLink: (link) => dispatch(addLink(link))
    };
};

//this is the redux magic connecting our action creator
//state and dispatch events so they can form a holy react union
export default connect(mapStateToProps, mapDispatchToProps)(Parent);
