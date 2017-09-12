import React from 'react';
import BG from '../public/assets/img/roman.jpg';
class Splash extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div style={{backgroundImage: `url(${BG})`, height:500, backgroundRepeat: 'none', backgroundSize: 'cover'}}>
                </div>
            </div>
        )
    }

}

export default Splash;