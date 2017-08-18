import React, {Component} from 'react';
//import { css } from 'aphrodite'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import Ticket from './ticket';
import SkyLight from 'react-skylight';

<link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"/>




@inject('store') @observer
export default class portIn extends Component{

 constructor(props){
        super(props);

        this.state = {term:''};
    }

onClickProductSelected(cell, row, rowIndex){
  	console.log('Product #', rowIndex);
  }
  
  cellButton(cell, row, enumObject, rowIndex) {
  	return (
        <button type="button" 
            onClick={() => 
            this.refs.simpleDialog.show()}>
            View
        </button>
    )
  }

    render() {
        return(
            <div>
                 <h4>Port In</h4>
                 <BootstrapTable data={ this.props.store.dataDonorIn } striped hover condensed>
                    <TableHeaderColumn dataField='recid' isKey>Record Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='user' >Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='cspnew'>New CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                    <TableHeaderColumn dataField='Button' dataFormat={this.cellButton.bind(this)}>Actions</TableHeaderColumn>
                </BootstrapTable>
                <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Customer {rowIndex}">
                    <Ticket/>
                </SkyLight>      
            </div>     
      


        );
    }

}