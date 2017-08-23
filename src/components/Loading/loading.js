
import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from './styles.css'
import Loading from 'react-loading-animation';

class Load extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
    }

    render() {
        return(
        <div className={css(styles.paraA)}>
            <div className={css(styles.paraB)}>
                <h3>Loading... </h3>
                <Loading/>
            </div>
        </div>

        );
    }

}

export default Load;