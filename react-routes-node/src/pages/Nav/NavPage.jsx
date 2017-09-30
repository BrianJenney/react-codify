
import React from 'react';
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { createHashHistory } from 'history';

class NavPage extends React.Component{

    goto=(dest)=>{
        switch(dest){
            case 'addhome':
                this.props.history.push("/addproperty");
                break;
            case 'listings':
                this.props.history.push("/listings");
                break;
            default:
                this.props.history.push("/home");
                break;
        }
    };

    render(){
        return(
            <div>
            <div className="col-md-6 col-md-offset-3">
                <Card onClick={this.goto.bind(this, 'addhome')}>
                    <CardHeader
                    title="For Sellers"
                    />
                    <CardMedia
                    overlay={<CardTitle title="Post A Property" subtitle="Fast and Easy" />}
                    >
                    <img width="50" src="https://i.ytimg.com/vi/Xx6t0gmQ_Tw/maxresdefault.jpg" alt="" />
                    </CardMedia>
                </Card>
            </div>

            <div className="col-md-6 col-md-offset-3"
                style={{marginTop: 45}}>
                <Card onClick={this.goto.bind(this, 'listings')}>
                    <CardHeader
                    title="For Buyers"
                    />
                    <CardMedia
                    overlay={<CardTitle title="Check Out Listings" subtitle="Homes For Sale" />}
                    >
                    <img width="50" src="https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w560x373.jpg?v=15" alt="" />
                    </CardMedia>
                </Card>
            </div>
            </div>
        )
    }
    

}

export default NavPage;