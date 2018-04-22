import React from 'react';

class TaskList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
      <h3>List Of Stuff to Do:</h3>
        <ul>
          {this.props.tasks.map(function(task, i){
            return <li key={i}>{task}</li>
            })}
        </ul>
      </div>
    )
  }

}

export default TaskList;
