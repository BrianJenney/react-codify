import React from 'react';
import Child from './Child'

class Article extends React.Component{

    constructor(props){
        super(props)
        this.state = {
           text: "Hey I am an article about nothing" ,
           childText: 'Hey I am child article',
           childHeader: 'Child Article'
        }
    }

    consoleClick=()=>{
        this.setState({text: `I've been clicked!`})
    }

    render(){
        return(
            <div>
                <h2>{this.state.text}</h2>

                <Child 
                article={this.state.childText}
                header={this.state.childHeader}
                />

                <button 
                className="btn btn-primary"
                onClick={this.consoleClick}>
                Click Me!
                </button>
            </div>
            
        )
    }
}

export default Article;