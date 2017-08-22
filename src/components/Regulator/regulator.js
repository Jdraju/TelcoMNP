import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from './styles.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import ToggleDisplay from 'react-toggle-display';

let regeneratorRuntime =  require("regenerator-runtime");

var products = [{
      num: 12144567890,
      csp: "ABC",
      custName: "John Smith",
      emailID: "johnsmith@abc.com",
      eligibility:"Y",
      Button:""
  }
  ]

@inject('store') @observer
export default class Regulator extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
    }

    track=async() => {
   let aaa= await this.props.store.mnpExitsCheck(this.usernum.value);
   console.log(aaa);
   if(aaa){

    this.mnprecid=this.props.store.data2[0].recid;

   }
  else{
  }

  
}

    render() {
        return(
        <div className={css(styles.customers)}>
            <h3>Regulator View: </h3>

            <div className={css(styles.customerIdent)}>
                Enter Customer Number: <input ref={(input) => { this.usernum = input; }} /> <Button bsStyle="primary" style = {{marginRight:'3px'}} onClick={this.track}>Submit</Button>

            </div>

            <div className={css(styles.PortR)}>
                <img src = '../../src/static/PortR.png' className={css(styles.img1)}/>
            </div>     
            <div className={css(styles.AvgPort)}>
                <BootstrapTable data={ this.props.store.data2 } striped hover condensed>
                     <TableHeaderColumn dataField='recid'>Customer Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='user' isKey>Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='cspold'>Current CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='cspnew'>New CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='planold.PlanID'>Old Plan</TableHeaderColumn>
                    <TableHeaderColumn dataField='plannew.PlanID'>New Plan</TableHeaderColumn>
                    <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                   
                </BootstrapTable>
            </div>  

        </div>

        );
    }

}
