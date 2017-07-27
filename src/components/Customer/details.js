import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from './styles.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var products = [{
      num: 12144567890,
      csp: "ABC",
      custName: "John Smith",
      emailID: "johnsmith@abc.com",
      eligibility:"Y"
  }
  ]

class details extends Component{


    render() {
        return(
            <div>
                <BootstrapTable data={ products } striped hover condensed>
                    <TableHeaderColumn dataField='num' isKey>Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='csp'>Current CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='custName'>Customer Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='emailID'>Email ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='eligibility'>Eligibility</TableHeaderColumn>
                </BootstrapTable>
            </div>     


        );
    }

}

export default details;