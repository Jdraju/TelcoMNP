import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { css } from 'aphrodite'
import { styles } from './styles.css'
import { Button } from 'react-bootstrap';
//import img1 from './Inbound.svg'

var avgs = [{
      num: 2144567891,
      csp: "XYZ",
      averageT:"1 Days",
      reason:"Pricing"
  },
  {
      num: 2144567892,
      csp: "XYZ",
      averageT:"1 Days",
      reason:"Pricing"
  },
  {
      num: 12144567893,
      csp: "XYZ",
      averageT:"2 Days",
      reason:"Service Quality"
  },
  {
      num: 2144567894,
      csp: "XYZ",
      averageT:"2 Days",
      reason:"Service Quality"
  }
  ]
class graphs extends Component{

    render() {
        return(
            <div className={css(styles.Graphs)}>
                <div className={css(styles.inboundIMG)}>
                    <img src = '../../src/static/Inbound.png' className={css(styles.img1)}/>
                </div>    
                <div className={css(styles.statsCircle)}>
                    <img src = '../../src/static/circle.png' className={css(styles.img2)}/>
                </div>
                <div className={css(styles.compareTab)}>
                    <div>
                        <BootstrapTable data={ avgs } striped hover condensed>
                            <TableHeaderColumn dataField='num' isKey>Number</TableHeaderColumn>
                            <TableHeaderColumn dataField='csp'>Current CSP</TableHeaderColumn>
                            <TableHeaderColumn dataField='averageT'>Average Time</TableHeaderColumn>
                            <TableHeaderColumn dataField='reason'>Reason</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                </div>

            </div>     
            

        );
    }

}

export default graphs;