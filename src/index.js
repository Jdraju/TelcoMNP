import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { css } from 'aphrodite'
import { styles } from './components/styles.css'

import Customer from './components/Customer/customer';




//Create new component. THis component should produce 
//some HTML

class App  extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={css(styles.pageWrap)}>

                {/*Title Bar*/}
                <div className={css(styles.titleBar)}>
                    <div className={css(styles.ibmLogo)}>
                        <img className={css(styles.ibmLogoPic)} src = '../Media/Picture1.png' height = '100px' width = '100px' />
                    </div>
                    <div className={css(styles.titleText)}>
                        <b>Mobile Number Portability</b>
                    </div>
                </div>
                {/*Navigation Bar*/}
                <div className={css(styles.navBar1)}>
                    <SideNav highlightColor='#FFF' highlightBgColor='#42c8f4'>       
                        <Nav id='Customer'>
                            <NavIcon><SvgIcon size={10} icon={ic_aspect_ratio}/></NavIcon>    
                            <NavText> Customer </NavText>
                        </Nav>
                        <Nav id='RecipientCSP'>
                            <NavIcon><SvgIcon size={10} icon={ic_business}/></NavIcon>
                            <NavText> Recipient CSP </NavText>
                        </Nav>
                        <Nav id=' DonorCSP'>
                            <NavIcon><SvgIcon size={10} icon={ic_business}/></NavIcon>
                            <NavText> Donor CSP </NavText>
                        </Nav>
                        <Nav id='Customer'>
                            <NavIcon><SvgIcon size={10} icon={ic_aspect_ratio}/></NavIcon>    
                            <NavText> Regulator</NavText>
                        </Nav>
                    </SideNav>
                </div>

                {/* Content*/}
                <div className={css(styles.indexContent)}>
                    <Customer/>
                </div>

            </div>
        );
    }
}

//Take this component's generated HTML and put it
//on the page( in the DOM)

ReactDOM.render(<App/>,document.querySelector('.container1'));