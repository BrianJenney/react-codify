import React, { Component } from 'react';

class Child extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>

                
                <h3>I'm the Child</h3>

                {this.props.cars.map((car, idx)=>
                    <p key={idx}>{car.model}</p>
                )}
                
                <p>My favorite movie is: {this.props.movie}</p>
                <p>I like to eat {this.props.food}</p>
                <p>I eat {this.props.candy} at the movies</p>
            </div>
        )
    }
}

export default Child;