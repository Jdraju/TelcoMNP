import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from './styles.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Button, FormGroup } from 'react-bootstrap';
import Plans from './plans';
import Details from './details';
import MNPDetails from './mnpdetails';
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import ToggleDisplay from 'react-toggle-display';

let regeneratorRuntime =  require("regenerator-runtime");

var products = [{
      id: 1,
      name: "PlanB",
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
        this.mnprecid="";
        this.user="";
    }
     





 resetView(){

    this.props.store.showplans=false;
    this.props.store.trackmnp=false
    this.props.store.mnpexits=false;;
    this.props.store.nomnp=false;
    this.props.store.useracc=false;

   }


     userAccepts=async() => {
     let a = await this.props.store.useraccepts(this.mnprecid);
     let aaa= await this.props.store.mnpExitsCheck(this.usernum.value);
    console.log(aaa);
   this.resetView();
   if(aaa){
    this.props.store.trackmnp=true;
    this.mnprecid=this.props.store.data2[0].recid;
    console.log(this.props.store.data2[0].status);
    if(this.props.store.data2[0].status=="Recipient Offer"){
        this.props.store.useracc=true;
    }

   }
  else{
    this.props.store.nomnp=true;
  } 
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
    this.mnprecid=this.props.store.data2[0].recid;
    console.log(this.props.store.data2[0].status);
    if(this.props.store.data2[0].status=="Recipient Offer"){
        this.props.store.useracc=true;
    }

   }
  else{
    this.props.store.nomnp=true;
  }

  
}


  userIni=async() => {
  let a= await this.props.store.userinimnp(this.usernum.value,this.reason.value);

  let aaa= await this.props.store.mnpExitsCheck(this.usernum.value);
   console.log(aaa);
   this.resetView();
   if(aaa){
    this.props.store.trackmnp=true;
    this.mnprecid=this.props.store.data2[0].recid;
    console.log(this.props.store.data2[0].status);
    if(this.props.store.data2[0].status=="Recipient Offer"){
        this.props.store.useracc=true;
    }

   }
  else{
    this.props.store.nomnp=true;
  } 
  console.log('Aman');
}


    render() {
       
        return(

            
        <div className={css(styles.customers)}>
            <h3>Customer Eligibility View: </h3>

            <div className={css(styles.customerIdent)}>
                 <ToggleDisplay show={!this.props.store.showplans}>
                <p> To check eligibility, enter your phone number.<br/> During this process you will have to provide additional information to establish your identity.</p>
                Enter # to check Eligibility:
                {/*<form><FormGroup controlId="formBasicText"validationState={this.getValidationState()}></FormGroup></form>*/}

                <input ref={(input) => { this.usernum = input; }} /> <button onClick={this.checkEligible}>Check Eligibility</button> <button onClick={this.track}>Track</button></ToggleDisplay>
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
              <ToggleDisplay show={this.props.store.useracc}>
              <Button bsStyle = "success" onClick={this.userAccepts}> Accept and Complete MNP</Button>
             </ToggleDisplay>   

 
           <ToggleDisplay show={this.props.store.showplans}>
            <div className={css(styles.customerDetails)} >

                <Details />
                <br/>
                Select a reason to port : 
                 <select ref={(select) => { this.reason = select; }}>
                    <option value="Service Quality">Service Quality</option>
                    <option value="Pricing">Pricing</option>
                    <option value="Customer Service">Customer Service</option>
                    <option value="Family on other Network">Family on other Network</option>
                  </select> 
                <Plans />
                <br/>
                <Button bsStyle = "success" onClick={this.userIni}> Submit</Button>
            </div>     
           </ToggleDisplay>

        </div>

        );
    }

}

