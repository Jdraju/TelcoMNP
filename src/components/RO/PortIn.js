import React, {Component} from 'react';
//import { css } from 'aphrodite'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';


<link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"/>



function buttonFormatter(cell, row){
    return '<Button bsStyle="info" width="100px">View</Button>';
    }


@inject('store') @observer
export default class portIn extends Component{

 constructor(props){
        super(props);

        this.state = {term:''};
    }

    render() {
        return(
            <div>
                 <h4>Port In</h4>
                 <BootstrapTable data={ this.props.store.dataRecepIn } striped hover condensed>
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

