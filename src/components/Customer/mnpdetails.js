import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from './styles.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';



@inject('store') @observer
export default class mnpdetails extends Component{

     constructor(props){
        super(props);

        this.state = {term:''};
        this.mnprecid="";
    }


    render() {

        function nameFormatter(data, cell) {
        return '<p>'+cell[data]+'</p>';
        }
        return(
            <div>
                <BootstrapTable data={ this.props.store.data2 } striped hover condensed>
                     <TableHeaderColumn dataField='recid'>Customer Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='user' isKey>Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='cspold'>Current CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='cspnew'>New CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='reason'>Reason</TableHeaderColumn>
                    <TableHeaderColumn dataField='planold' dataFormat={ nameFormatter.bind(this, 'PlanId') }>Old Plan</TableHeaderColumn>
                    <TableHeaderColumn dataField='plannew'  dataFormat={ nameFormatter.bind(this, 'PlanId') }>New Plan</TableHeaderColumn>
                    <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                   
                </BootstrapTable>
            </div>     


        );
    }

}

