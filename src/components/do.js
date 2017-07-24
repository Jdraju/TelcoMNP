import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from './styles.css'

class customer extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
    }

    render() {
        return(
        <div className={css(styles.customers)}>
            <h3>Donor Operator View: </h3>

            <div className={css(styles.customerIdent)}>
                
            </div>

            <div className={css(styles.customerPlans)}>
                
            </div>     

        </div>

        );
    }

}

export default customer;