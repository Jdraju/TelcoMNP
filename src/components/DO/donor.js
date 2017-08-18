import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PortIn from './PortIn';
import PortOut from './PortOut';
import Graphs from './graphs';
import { css } from 'aphrodite'
import { styles } from './styles.css'

var products = [{
      id: 1,
      name: "Plan1",
      price: 120
  }, {
      id: 2,
      name: "Plan2",
      price: 80
  }, {
      id: 3,
      name: "Plan3",
      price: 100
  }, {
      id: 4,
      name: "Plan4",
      price: 85
  }, {
      id: 5,
      name: "Plan5",
      price: 60
  },

  
  ]

class donor extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
    }

    render() {
        return(
            <div>
                <h2>Donor Operator View</h2>
                <div >
                    <PortOut/>
                </div>
                <br/>     
                <div>
                    <PortIn/>
                </div>
                <br/>
                <div>
                    <Graphs/>
                </div>
            </div>

        );
    }

}

export default donor;