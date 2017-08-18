import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from './styles.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import Plans from './plans';
import Details from './details';
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import ToggleDisplay from 'react-toggle-display';



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
     

  checkEligible=() => {
   this.props.store.getUserData(this.usernum.value);
    this.props.store.showplans=true;
   console.log('Aman');
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
                Enter # to check Eligibility:<input ref={(input) => { this.usernum = input; }} /> <button onClick={this.checkEligible}>Check Eligibility</button> <button>Track</button></ToggleDisplay>
                <ToggleDisplay show={this.props.store.showplans}>
                <p> Congrats !! You are eligible to port to a new operator</p>
                Please select a plan and submit:</ToggleDisplay> 
            </div>

            <hr/>
 
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

