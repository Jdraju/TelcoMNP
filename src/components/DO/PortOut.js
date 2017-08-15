import React, {Component} from 'react';
import { css } from 'aphrodite'
import { Button } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var products = [{
      num: 12144567890,
      csp: "ABC",
      custName: "John Smith",
      emailID: "johnsmith@abc.com",
      eligibility:"Y",
  }
  ]


function buttonFormatter(cell, row){
    return '<Button bsStyle="info" width="100px">View</Button>';
}

class portOut extends Component{


    render() {
        return(
            <div>
                <BootstrapTable data={ products } striped hover condensed>
                    <TableHeaderColumn dataField='num' isKey>Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='csp'>Current CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='custName'>Customer Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='emailID'>Email ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='eligibility'>Eligibility</TableHeaderColumn>
                    <TableHeaderColumn dataField='button' dataFormat={buttonFormatter}>Actions</TableHeaderColumn>
                </BootstrapTable>
                
            </div>     


        );
    }

}

export default portOut;