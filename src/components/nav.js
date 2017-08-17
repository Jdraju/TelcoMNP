import React, {Component} from 'react';
import PortIn from './PortIn';
import { css } from 'aphrodite'
import { styles } from './styles.css'



class donor extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
    }

    render() {
        return(
            <div>
                 <nav>
                    <a href="/html/">HTML</a> |
                    <a href="/css/">CSS</a> |
                    <a href="/js/">JavaScript</a> |
                    <a href="/jquery/">jQuery</a>
                </nav> 
            </div>

        );
    }

}

export default donor; 
 