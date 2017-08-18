import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from './styles.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


var products = [{
      planID: 1,
      serviceValidity: "Plan1",
      talktimeBalance: "unlimmited",
      sMSbalance: "Unlimmited",
      dataBalance: "2GB",
      price: "$120"
  }, 
  {
      planID: 2,
      serviceValidity: "Plan1",
      talktimeBalance: "unlimmited",
      sMSbalance: "Unlimmited",
      dataBalance: "2GB",
      price: "$120"
  }, 
  {
      planID: 3,
      serviceValidity: "Plan1",
      talktimeBalance: "unlimmited",
      sMSbalance: "Unlimmited",
      dataBalance: "2GB",
      price: "$120"
  }, 
  {
      planID: 4,
      serviceValidity: "Plan1",
      talktimeBalance: "unlimmited",
      sMSbalance: "Unlimmited",
      dataBalance: "2GB",
      price: "$120"
  }, 
  ]

  var selectRowProp = {
  mode: "checkbox",
  clickToSelect: true,
  bgColor: "#b3ffb3" 
};

class plans extends Component{


    render() {
        return(
            <div>
                <BootstrapTable data={ products } selectRow={selectRowProp} striped hover condensed>

                    <TableHeaderColumn dataField='planID' isKey>Plan ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='serviceValidity'>Term</TableHeaderColumn>
                    <TableHeaderColumn dataField='talktimeBalance'>Voice</TableHeaderColumn>
                    <TableHeaderColumn dataField='sMSbalance'>SMS</TableHeaderColumn>
                    <TableHeaderColumn dataField='dataBalance'>Data</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
                </BootstrapTable>
            </div>     

        );
    }

}

export default plans;