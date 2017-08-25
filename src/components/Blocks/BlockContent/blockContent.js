import React, {Component} from 'react';
import { css } from 'aphrodite'
import { styles } from '../styles.css'
import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';




@inject('store') @observer
export default class BlockContent extends Component{
   

  

     constructor(props){
        super(props);

        this.state = {term:''};
    }
    

    render() {
        return(
        <div className={css(styles.d1)}>
            {this.props.blockval}
        </div>

        );
    }

}

