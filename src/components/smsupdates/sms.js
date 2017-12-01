import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import Draggable from 'react-draggable';
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';

let regeneratorRuntime =  require("regenerator-runtime");
 
@inject('store') @observer
export default class sms extends Component {
constructor(props){
        super(props);
 this.state = {term:''};
}


  


 
  render() {

   const { x, y } = this.state;
    
    var imgphone = {
     position: 'relative',
     zIndex:2
    };
    
    
    var maindiv = {
     position: 'realtive',
    };

     var div1 = {
     position: 'absolute',
    };
     var div2 = {
     position: 'absolute',
     left:"800px"
    };




    return (
      <div style={maindiv}>
      
          <div style={div1}>
          
               <img style={imgphone} src={this.props.store.smsimg}  height="500" width="250"/> 
        </div>
       
      </div>
    );
  }
}
 