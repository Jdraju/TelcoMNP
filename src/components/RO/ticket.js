import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from './styles.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';

var products = [{
      num: 12144567890,
      csp: "ABC",
      custName: "John Smith",
      emailID: "johnsmith@abc.com",
      eligibility:"Y"
  }
  ]

@inject('store') @observer
export default class ticket extends Component{


    render() {
        return(
            <div>
                <BootstrapTable data={ products} striped hover condensed>
                     <TableHeaderColumn dataField='custname'>Customer Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='num' isKey>Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='servpro'>Current CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='emailid'>Email ID</TableHeaderColumn>
                </BootstrapTable>
            </div>     


        );
    }

}

