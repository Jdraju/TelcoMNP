import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from './styles.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


var products = [{
      planID: "Plan A",
      serviceValidity: "Unlimited",
      talktimeBalance: "Unlimmited",
      sMSbalance: "Unlimited",
      dataBalance: "2GB",
      price: "$120"
  }, 
  {
      planID: 'Plan B',
      serviceValidity: "Unlimited",
      talktimeBalance: "Unlimited",
      sMSbalance: "Unlimited",
      dataBalance: "5GB",
      price: "$150"
  }, 
  {
      planID: 'Plan C',
      serviceValidity: "Unlimited",
      talktimeBalance: "Unlimited",
      sMSbalance: "Unlimited",
      dataBalance: "10GB",
      price: "$170"
  }, 
  {
      planID: "Plan D",
      serviceValidity: "Unlimited",
      talktimeBalance: "Unlimited",
      sMSbalance: "Unlimited",
      dataBalance: "1GB",
      price: "$90"
  }, 
  ]

  var selectRowProp = {
   mode: 'radio',
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