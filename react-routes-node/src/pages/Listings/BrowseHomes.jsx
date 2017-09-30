
import React from 'react';
import axios from 'axios';

class BrowseListings extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            houses: []
        }
    };

    componentDidMount=()=>{
        console.log('working');
    };

    render(){
        return(
            <div>
                <h1>House Listings</h1>
            </div>
        )
    };

}

export default BrowseListings;