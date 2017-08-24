import React, {Component} from 'react';
//import { css } from 'aphrodite'
import { Button } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import SkyLight from 'react-skylight';
import Ticket from './ticket';


let regeneratorRuntime =  require("regenerator-runtime");



@inject('store') @observer
export default class portOut extends Component{



 constructor(props){
        super(props);

        this.state = {term:''};
        this.mnprecid="";
    }


   


onClickProductSelected(cell, row, rowIndex){
  	console.log('Product #', rowIndex);
  }


    recepApprove=async() => {
        console.log(this.mnprecid);
     let a= await this.props.store.donorapproves(this.mnprecid);
     let aa= await this.props.store.getMNPRecAll('recep');
     this.simpleDialog.hide();
   console.log('Aman');
   //window.location.reload();
   }
  
  cellButton(cell, row, enumObject, rowIndex) {
    if(row['status']=='User Confirmation'){
  	return (
        <button type="button" 
            onClick={() => 
            this.donorApprove}>
            Approve
        </button>
    )
    }
  }


    render() {
       
         let selectRowProp = {
         mode: 'radio',
        clickToSelect: true,
        onSelect:activecase,
        bgColor: "#b3ffb3" 
       };

        function activecase(row, isSelected, e)
      {
      console.log(row['user']+'  '+row['recid']);
      popup(row['user'],row['recid']);
    }
    
        
            let popup=async(num,recid) => {
                 let a = await this.props.store.getUserData(num);
                 this.mnprecid=recid;
                 this.simpleDialog.show();
               } 
        

        return(
            <div>
                <h4>Port Out</h4>
                <BootstrapTable data={ this.props.store.dataRecepOut } selectRow={selectRowProp} striped hover condensed>
                    <TableHeaderColumn dataField='recid' isKey>Record Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='user' >Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='cspnew'>New CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                    <TableHeaderColumn dataField='button' dataFormat={this.cellButton.bind(this)}>Action</TableHeaderColumn>
                </BootstrapTable>

                <SkyLight hideOnOverlayClicked ref={(input) => { this.simpleDialog = input; }} title="">
                    <Ticket/>
                <Button bsStyle = "success" onClick={this.recepApprove}> Approve</Button>
                </SkyLight>

            </div>     
            
        );
    }

}
