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
export default class details extends Component{


    render() {
        return(
            <div>
                <BootstrapTable data={ this.props.store.data } striped hover condensed>
                     <TableHeaderColumn dataField='custName'>Customer Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='num' isKey>Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='csp'>Current CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='emailID'>Email ID</TableHeaderColumn>
                   
                </BootstrapTable>
            </div>     


        );
    }

}

