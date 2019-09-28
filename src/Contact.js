import React from 'react';
import {Icon } from "semantic-ui-react";


class Contact extends React.Component{
    constructor (props){
        super(props);
        this.state ={
            email : "ellaabraham@gmail.com",
            phone: 6309234445,
            location: "Aurora, IL",
        };
    }
    render(){
        return (
          <div>
             <h2> <Icon name=' large address card outline' />{this.state.email} <br/>
             <Icon name='  phone' /> {this.state.phone}  <br/>
             < Icon name ='location arrow'  /> {this.state.location}</h2>
            </div>
        );
    };
}

export default Contact;