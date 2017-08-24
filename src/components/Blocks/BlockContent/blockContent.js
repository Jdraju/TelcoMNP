import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from '../styles.css'





class BlockContent extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
    }

    render() {
        return(
        <div className={css(styles.d1)}>
            Block1
        </div>

        );
    }

}

export default BlockContent;