import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from './styles.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import Plans from './plans';
import Details from './details';
import MNPDetails from './mnpdetails';
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import ToggleDisplay from 'react-toggle-display';

let regeneratorRuntime =  require("regenerator-runtime");

var products = [{
      id: 1,
      name: "Plan1",
      price: 120
  }, {
      id: 2,
      name: "Plan2",
      price: 80
  }, {
      id: 3,
      name: "Plan3",
      price: 100
  }, {
      id: 4,
      name: "Plan4",
      price: 85
  }, {
      id: 5,
      name: "Plan5",
      price: 60
  },

  
  ]




@inject('store') @observer
export default class customer extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
    }
     


 resetView(){

    this.props.store.showplans=false;
    this.props.store.trackmnp=false
    this.props.store.mnpexits=false;;
    this.props.store.nomnp=false;

   }


  checkEligible=async()=> {
   this.resetView();
   let aaa= await this.props.store.mnpExitsCheck(this.usernum.value);
   console.log(aaa);
   if(aaa){
    console.log('Already there');
    this.props.store.trackmnp=true;
    this.props.store.mnpexits=true;
   
   }
  else{
   this.props.store.getUserData(this.usernum.value);
    this.props.store.showplans=true;
   console.log('Aman');
  }

  
}



  track=async() => {
   this.resetView();
   let aaa= await this.props.store.mnpExitsCheck(this.usernum.value);
   console.log(aaa);
   if(aaa){
    this.props.store.trackmnp=true;
   }
  else{
    this.props.store.nomnp=true;
  }

  
}


  userIni=() => {
  this.props.store.userinimnp(this.usernum.value);
    this.props.store.showplans=true;
   console.log('Aman');
}
    render() {
       
        return(

            
        <div className={css(styles.customers)}>
            <h3>Customer Eligibility View: </h3>

            <div className={css(styles.customerIdent)}>
                 <ToggleDisplay show={!this.props.store.showplans}>
                <p> To check eligibility, enter your phone number.<br/> During this process you will have to provide additional information to establish your identity.</p>
                Enter # to check Eligibility:<input ref={(input) => { this.usernum = input; }} /> <button onClick={this.checkEligible}>Check Eligibility</button> <button onClick={this.track}>Track</button></ToggleDisplay>
                <ToggleDisplay show={this.props.store.showplans}>
                <p> Congrats !! You are eligible to port to a new operator</p>
                Please select a plan and submit:</ToggleDisplay> 

                <ToggleDisplay show={this.props.store.mnpexits}>
                <p>You already have an existng MNP request: </p></ToggleDisplay> 
                <ToggleDisplay show={this.props.store.trackmnp}>
                  <p>  Below is the Mobile Number Portability request for your number:</p></ToggleDisplay> 
                <ToggleDisplay show={this.props.store.nomnp}>
                   <p>There is no current Mobile Number Porting Request for this number</p></ToggleDisplay> 

            </div>

            <hr/>


            <ToggleDisplay show={this.props.store.trackmnp}>
            <div className={css(styles.customerDetails)} >

                <MNPDetails />
                <br/>
               {//<Button bsStyle = "success" onClick={this.userIni}> Submit</Button>
               }
            </div>     
           </ToggleDisplay>

 
           <ToggleDisplay show={this.props.store.showplans}>
            <div className={css(styles.customerDetails)} >

                <Details />
                <br/>
                <Plans />
                <br/>
                <Button bsStyle = "success" onClick={this.userIni}> Submit</Button>
            </div>     
           </ToggleDisplay>

        </div>

        );
    }

}

