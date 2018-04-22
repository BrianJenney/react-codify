import React from 'react';

class Child extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>{this.props.header}</h1>
                <p>{this.props.article}</p>
            </div>
        )
    }
}

export default Child;