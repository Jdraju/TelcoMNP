import React, {Component} from 'react';
//import { css } from 'aphrodite'
import { Button } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';

function buttonFormatter(cell, row){
    return "<Button onClick={console.log('THISWORKS')} bsStyle='info'>View</Button>";
}

@inject('store') @observer
export default class portOut extends Component{

 constructor(props){
        super(props);

        this.state = {term:''};
    }

    render() {
        return(
            <div>
                <BootstrapTable data={ this.props.store.dataDonorOut } striped hover condensed>
                    <TableHeaderColumn dataField='recid' isKey>Record Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='user' >Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='cspnew'>New CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                    <TableHeaderColumn dataField='Button' dataFormat={buttonFormatter}>Actions</TableHeaderColumn>
                </BootstrapTable>
            </div>     
        );
    }

}
