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
  this.props.store.data2R=[];
  this.props.store.dataR=[]; 
   this.props.store.regshow1=false;
   this.props.store.regshow2=false;
   this.props.store.regshow3=false;
   this.props.store.regshow4=false;

   let a=await this.props.store.getUserDataR(this.usernum.value);
   if(a)
   {
   this.props.store.regshow1=true;
   let aaa= await this.props.store.mnpExitsCheckR(this.usernum.value);
   console.log(aaa);
    
    if(aaa){
    this.props.store.regshow2=true;
    this.mnprecid=this.props.store.data2[0].recid;
    }
   }
   else{
       console.log('User not valid');
       this.props.store.regshow3=true;
   } 

  
}

    render() {

        function nameFormatter(data, cell) {
       if((typeof cell)!='string'){
        return '<p>'+cell[data]+'</p>';
       }
       else{
           return cell;
       }
    }

        return(

        <div className={css(styles.customers)}>
            <h3>Regulator View: </h3>

            <div className={css(styles.customerIdent)}>
                Enter Customer Number: <input ref={(input) => { this.usernum = input; }} /> <Button bsStyle="primary" style = {{marginRight:'3px'}} onClick={this.track}>Submit</Button>

            </div>

            <div className={css(styles.PortR)}>
                <img src = '../../src/static/PortR.png' className={css(styles.img1)}/>
            </div>    

            <ToggleDisplay show={this.props.store.regshow1}> 
           
             <div className={css(styles.AvgPort)}>
                  <h3>User Details</h3>
                <BootstrapTable data={ this.props.store.dataR } striped hover condensed>
                     <TableHeaderColumn dataField='custname'>Customer Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='num' isKey>Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='servpro'>Current CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='emailid'>Email ID</TableHeaderColumn>
                   
                </BootstrapTable>
            </div> 
            </ToggleDisplay>

           <ToggleDisplay show={this.props.store.regshow2}>
            <div className={css(styles.AvgPort)}>
                <h3>MNP Records</h3>
                <BootstrapTable data={ this.props.store.data2R } striped hover condensed>
                     <TableHeaderColumn dataField='recid'>Customer Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='user' isKey>Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='cspold'>Current CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='cspnew'>New CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='reason'>Reason</TableHeaderColumn>
                    <TableHeaderColumn dataField='planold' dataFormat={ nameFormatter.bind(this, 'PlanId') }> Old Plan</TableHeaderColumn>
                    <TableHeaderColumn dataField='plannew' dataFormat={ nameFormatter.bind(this, 'PlanId') }>New Plan</TableHeaderColumn>
                    <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                   
                </BootstrapTable>
            </div>  
            </ToggleDisplay>

        </div>

        );
    }

}
