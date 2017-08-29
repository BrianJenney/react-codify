import React from 'react';

import TaskList from './TaskList';

class UserInput extends React.Component{

  constructor(props){
    super(props)

    this.state={
      list: [],
      task: '',
      disabled: true
    }
  }

  //save user input to an array
  clickMe=()=>{
    this.state.list.push(this.state.task);
    this.setState({task: '', disabled: true});
  }

  // update state with user input
  recordInput=(e)=>{
    this.setState({task: e.target.value})

    if(this.state.task.length> 0){
      this.setState({disabled: false})
    }

  }

  render(){
    return(
      <div>
        <button
          disabled={this.state.disabled}
          className="btn btn-primary"
          onClick={this.clickMe}>
          Save Me!
        </button>

        <input
          onChange={this.recordInput.bind(this)}
          value={this.state.task}></input>

        <TaskList tasks={this.state.list}/>
      </div>
    )
  }

}

export default UserInput;
