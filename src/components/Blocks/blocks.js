import React, {Component} from 'react';
import { css } from 'aphrodite';
import { styles } from './styles.css';
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import JsonTable from 'react-json-table'
import { Button, FormGroup } from 'react-bootstrap';
import SkyLight from 'react-skylight';

import BlockContent from './BlockContent/blockContent';



@inject('store') @observer
export default class Blocks extends Component{
    constructor(props){
        super(props);

        this.state = {sky:false};
    }
    
 showBlock=(key)=>{
      //console.log(key);
      this.props.store.currblock=[];
      this.props.store.currblock=this.props.store.currblock.concat(this.props.store.blocks[key]);
       console.log(this.props.store.currblock);
       this.simpleDialog.show();
    }
    
       
    

    render() {
        var rows = [];
        var skylightProps = {
            width:'70vw !important',
            height:'300px !important',
            'margin-left': '-38%',
        }
       
        
        for (var i=0; i < this.props.store.blocks.length; i++) {
            //console.log(this.props.store.blocks[i]);
         //rows.push(<BlockContent  key={i} blockval={this.props.store.blocks[i].transactionId}/>);
         rows.push(<div key={i} bsStyle = "success" className={css(styles.blocksB)} onClick={this.showBlock.bind(this,i)}>{this.props.store.blocks[i].transactionId}</div>);
         
           }

          return (
          
          <div> {rows}

          <SkyLight hideOnOverlayClicked ref={(input) => { this.simpleDialog = input; }} title="" dialogStyles={skylightProps}>
              <div  className={css(styles.skyDiv)}><JsonTable  className={css(styles.skyTable)} rows={this.props.store.currblock} /></div>
          </SkyLight>
          </div>
          
          );
        
    }

}