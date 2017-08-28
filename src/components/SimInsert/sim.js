import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import Draggable from 'react-draggable';
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';

let regeneratorRuntime =  require("regenerator-runtime");
 
@inject('store') @observer
export default class siminsert extends Component {
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
    var imgsig = {
     position: 'absolute',
     left:'175px',
     top:'80px',
     zIndex:22
    };
    var imgsim = {
     position: 'absolute',
     left:'175px',
     top:'80px',
     zIndex:22
    };
    var inum = {
     position: 'absolute',
     left:'35px',
     top:'150px',
     textalign:'center',
     zIndex:22
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

      function handleStop(event, ui) {
    //console.log('Event: ', event.clientX);
    let x=ui.lastX;
    console.log(x);
    if(x<-650)
    {
      console.log('Sim Inserted');
      changeimg();

    }
  }

  let changeimg = async()=>{
    console.log('changeimg');
    this.props.store.sigimg="../../media/signal.gif";
    let a = await this.props.store.simactivate(this.usernum.value);
    this.props.store.currnum="Sim Activated";
  }

    return (
      <div style={maindiv}>
      
          <div style={div1}>
               <img style={imgsig} ref={(image) => { this.signal = image; }} src={this.props.store.sigimg}  height="50" width="50"/>
               <input style={inum} ref={(input) => { this.usernum = input; }} readOnly='true 'value={this.props.store.currnum} height="50" width="50"/> 
               <img style={imgphone} src="../../media/cellphone.gif"  height="500" width="250"/> 
        </div>
       


      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={handleStop}>

         
          <div className="handle" style={div2}>
               <img style={imgsim} src="../../media/sim.png"  height="50" width="50"/> 
        </div>
     
      </Draggable>
      </div>
    );
  }
}
 