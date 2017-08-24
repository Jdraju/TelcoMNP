import React, {Component} from 'react';
import { css } from 'aphrodite';
import { styles } from './styles.css';

import BlockContent from './BlockContent/blockContent';



class Blocks extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
    }

    render() {
        return(
        <div className={css(styles.contains)}>
                <BlockContent/>
        </div>

        );
    }

}

export default Blocks;