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
export default class portIn extends Component{



 constructor(props){
        super(props);

        this.state = {term:''};
        this.mnprecid="";
        this.mnpplan="";
    }


   


onClickProductSelected(cell, row, rowIndex){
  	console.log('Product #', rowIndex);
  }


    recepApprove=async () => {
        console.log(this.mnprecid);
     let a = await this.props.store.recipientoffer(this.mnprecid,this.mnpplan);
     let aa= await this.props.store.getMNPRecAll('recep');
     this.simpleDialog.hide();
     console.log('Aman');
   }
  
  cellButton(cell, row, enumObject, rowIndex) {
    if(row['status']=='Donor Approves'){
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
        clickToSelectAndEditCell: true,
        onSelect:activecase,
        bgColor: "#b3ffb3" 
       };

       let cellEditProps = {mode: "dbclick",
                      blurToSave: true        
              };


        function activecase(row, isSelected, e)
      {
          let plan='';
      console.log(row['user']+'  '+row['recid']);
      if((typeof row['plannew'])!='string'){
        plan=row['plannew']['PlanId'];
       }
       else{
           plan=row['plannew'];
       }

      popup(row['user'],row['recid'],row['plannew']);
    }
    
        
            let popup=async(num,recid,plannew) => {
                 let a = await this.props.store.getUserData(num);
                 this.mnprecid=recid;
                 this.mnpplan=plannew;
                 this.simpleDialog.show();
               } 

        function nameFormatter(data, cell) {
       if((typeof cell)!='string'){
        return '<p>'+cell[data]+'</p>';
       }
       else{
           return cell;
       }
    }
    
    const planTypes = [ {
  value: 'PlanA',
  text: 'PlanA'
}, {
  value: 'PlanB',
  text: 'PlanB'
}, {
  value: 'PlanC',
  text: 'PlanC'
}, {
  value: 'PlanD',
  text: 'PlanD'
} ];

        return(
            <div>
                <h4>Port In</h4>
                <BootstrapTable data={ this.props.store.dataRecepIn } cellEdit={cellEditProps} selectRow={selectRowProp} striped hover condensed>
                    <TableHeaderColumn dataField='recid' isKey>Record Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='user' >Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='cspnew'>New CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='reason'>Reason</TableHeaderColumn>
                    <TableHeaderColumn dataField='plannew'  dataFormat={ nameFormatter.bind(this, 'PlanId') } editable={ { type: 'select', options: { values: planTypes } } }>New Plan</TableHeaderColumn>
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
