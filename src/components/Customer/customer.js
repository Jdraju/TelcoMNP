import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from './styles.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import Plans from './plans';
import Details from './details';
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';

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
      fun=()=>{
   this.props.store.getUserData(this.usernum.value);
}

    render() {
        return(

            
        <div className={css(styles.customers)}>
            <h3>Customer Eligibility View: </h3>

            <div className={css(styles.customerIdent)}>
                <p> To check eligibility, enter your phone number.<br/> During this process you will have to provide additional information to establish your identity.</p>
                Enter # to check Eligibility: <input/> <Button bsStyle="primary" style = {{marginRight:'3px'}} onClick={this.fun}>Check Eligibility</Button><Button bsStyle="info">Track</Button>
            </div>

            <div className={css(styles.customerDetails)}>
                <Details />
                <br/>
                <Plans />
                <br/>
                <Button bsStyle = "success"> Submit</Button>
            </div>     

        </div>

        );
    }

}

