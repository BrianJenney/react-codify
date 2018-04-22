import React, { Component } from 'react';
import './style/header.css';

import Child from './Child';

//capture user input on a click

//when a user clicks button => console log the input

class App extends Component{

    constructor(props){
        super(props)

        this.state = {
            title: 'Hello World',
            userInput: '',
            childMovie: 'Lion King',
            childFood: 'veggie nuggets',
            childCandy: 'gummies',
            cars: [
                {
                    model: 'Ford',
                    year: 1983,
                    color: 'red'
                },
                {
                    model: 'Chevy',
                    year: 1976,
                    color: 'black'
                },
                {
                    model: 'GM',
                    year: 1969,
                    color: 'brown'
                }
            ]
        }
    }

    handleChange=(event)=>{
        this.setState({userInput: event.target.value})
    }

    handleClick=()=>{
        console.log(this.state.userInput);
    }

    render(){
        return(
            <div>
                <input onChange={this.handleChange} type="text"/>

                <button 
                onClick={this.handleClick}
                className="btn btn-primary">
                    Click Me
                </button>

                <h1>{this.state.title}</h1>
                    <Child 
                    cars={this.state.cars}
                    food={this.state.childFood}
                    candy={this.state.childCandy}
                    movie={this.state.childMovie}
                    />
            </div>
        )
    }
}

export default App;