import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            year: Date.now().toString(),
            author: 'Brian Jenney'
        }
    }

    render(){
        return(
            <div>
                <footer style={{backgroundColor: `gray`}}>
                    <p className='pull-right no-margin'>{this.state.year}</p>
                    <p className='no-margin'>Author: {this.state.author}</p>
                </footer>
            </div>
        )
    }
}

export default Footer;