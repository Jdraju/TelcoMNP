import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from './styles.css'

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
    }

    render() {
        return(
        <div className={css(styles.titlesA)}>
            <h3>Welcome to the MNP with Blockchain: </h3>

            <div className={css(styles.paraA)}>
                This solution showcases the use of Blockchain within the Mobile Number Portability process.
            </div>

        </div>

        );
    }

}

export default Home;