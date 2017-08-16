import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from './styles.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';


var products = [{
      num: 12144567890,
      csp: "ABC",
      custName: "John Smith",
      emailID: "johnsmith@abc.com",
      eligibility:"Y",
      Button:""
  }
  ]

class Regulator extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
    }

    render() {
        return(
        <div className={css(styles.customers)}>
            <h3>Regulator View: </h3>

            <div className={css(styles.customerIdent)}>
                Enter Customer Number: <input/> <Button bsStyle="primary" style = {{marginRight:'3px'}} onClick={this.fun}>Submit</Button>

            </div>

            <div className={css(styles.PortR)}>
                <img src = '../../src/static/PortR.png' className={css(styles.img1)}/>
            </div>     
            <div className={css(styles.AvgPort)}>
                <BootstrapTable data={ products} striped hover condensed>
                    <TableHeaderColumn dataField='custName'>Customer Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='num' isKey>Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='csp'>Current CSP</TableHeaderColumn>
                    <TableHeaderColumn dataField='emailID'>Email ID</TableHeaderColumn>
                </BootstrapTable>
            </div>  

        </div>

        );
    }

}

export default Regulator;