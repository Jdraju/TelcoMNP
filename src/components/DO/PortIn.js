import React, {Component} from 'react';
import { css } from 'aphrodite'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';


<link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"/>

var products = [{
      msisdn:12148706525,
      csp: "ABC",
      queuedT: "John Smith",
      reason: "johnsmith@abc.com",
      status:"Y",
  },
  {
      msisdn:12148706525,
      csp: "ABC",
      queuedT: "John Smith",
      reason: "johnsmith@abc.com",
      status:"Y",
  },
  {
      msisdn:12148706525,
      csp: "ABC",
      queuedT: "John Smith",
      reason: "johnsmith@abc.com",
      status:"Y",
  }
  ]

function buttonFormatter(cell, row){
    return '<Button bsStyle="info" width="100px">View</Button>';
    }

class portIn extends Component{


    render() {
        return(
            <div>
                
                <BootstrapTable data={ products } striped hover condensed>
                    <TableHeaderColumn dataField='num' isKey>MSISDN</TableHeaderColumn>
                    <TableHeaderColumn dataField='csp'>CSP(DO)</TableHeaderColumn>
                    <TableHeaderColumn dataField='queuedT'>Queued Time</TableHeaderColumn>
                    <TableHeaderColumn dataField='reason'>Reason</TableHeaderColumn>
                    <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                    <TableHeaderColumn dataField='button' dataFormat={buttonFormatter}>Actions</TableHeaderColumn>
                </BootstrapTable>
            </div>     


        );
    }

}

export default portIn;

