import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Nav, NavIcon, NavText, withRR4 } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { css } from 'aphrodite'
import { styles } from './components/styles.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Customer from './components/Customer/customer';
import Donor from './components/DO/do';
import Recipent from './components/RO/ro';
import Regulator from './components/Regulator/regulator';
import Home from './components/Home/home';

const SideNav = withRR4();

class Sales extends React.Component {

    componentWillUnmount() {
        console.log('Unmount');
    }

    render() {
        return (
            <div>Sales</div>
        );
    }
}

class RR4 extends React.Component {

    constructor(props) {
        super(props);

    }

    renderHome = () => {
        return <Home />;
    }

    renderCustomer = () => {
        return <Customer />;
    }

    renderDonor = () => {
        return <Donor />;
    }

    renderRecipent = () => {
        return <Recipent />;
    }

    renderRegulator = () => {
        return <Regulator />;
    }


    render() {
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
                            <SideNav default='Home' highlightColor='#FFF' highlightBgColor='#42c8f4'>
                                
                                <Nav id='Home'>
                                    <NavIcon><SvgIcon size={10} icon={ic_aspect_ratio}/></NavIcon>    
                                    <NavText> Home </NavText>
                                </Nav>

                                <Nav id='Customer'>
                                    <NavIcon><SvgIcon size={10} icon={ic_aspect_ratio}/></NavIcon>    
                                    <NavText> Customer </NavText>
                                </Nav>

                                <Nav id='DonorCSP'>
                                    <NavIcon><SvgIcon size={10} icon={ic_aspect_ratio}/></NavIcon>    
                                    <NavText> Donor CSP </NavText>
                                </Nav>

                                <Nav id='RecipentCSP'>
                                    <NavIcon><SvgIcon size={10} icon={ic_aspect_ratio}/></NavIcon>    
                                    <NavText> Recipent CSP </NavText>
                                </Nav>

                                <Nav id='Customer'>
                                    <NavIcon><SvgIcon size={10} icon={ic_aspect_ratio}/></NavIcon>    
                                    <NavText> Regulator </NavText>
                                </Nav>
                                {/*
                                <Nav id='sales'>
                                    <NavText> Sales </NavText>
                                    <Nav id='list'>
                                        <NavText> List Sales </NavText>
                                    </Nav>
                                </Nav>
                                <Nav id='products'>
                                    <NavText>  Products </NavText>
                                </Nav>

                                */}
                            </SideNav>
                        </div>
                        <Router>
                            <div className={css(styles.indexContent)}>
                                <Route exact path ="/" render={this.renderHome}/>
                                <Route path ="/Customer" render={this.renderCustomer}/>
                                <Route path ="/DO" render={this.renderDonor}/>
                                <Route path ="/RO" render={this.renderRecipent}/>
                                <Route path ="/Regulator" render={this.renderRegulator}/>
                            </div>
                        </Router>
                    
                    {/* Content*/}
            </div>
        );
    }
}


ReactDOM.render(<RR4 />,document.querySelector('.container1'));
//render(<RR4 />, document.getElementById('app'));
{/*<BrowserRouter>
    <div className={css(styles.pageWrap)}>

                {/*Title Bar*
                <div className={css(styles.titleBar)}>
                    <div className={css(styles.ibmLogo)}>
                        <img className={css(styles.ibmLogoPic)} src = '../Media/Picture1.png' height = '100px' width = '100px' />
                    </div>
                    <div className={css(styles.titleText)}>
                        <b>Mobile Number Portability</b>
                    </div>
                </div>
                {/*Navigation Bar
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
                        <Nav id='DonorCSP'>
                            <NavIcon><SvgIcon size={10} icon={ic_business}/></NavIcon>
                            <NavText> Donor CSP </NavText>
                        </Nav>
                        <Nav id='Customer'>
                            <NavIcon><SvgIcon size={10} icon={ic_aspect_ratio}/></NavIcon>    
                            <NavText> Regulator</NavText>
                        </Nav>
                    </SideNav>
                </div>

                {/* Content
                <div className={css(styles.indexContent)}>
                    
                        <Route path ="/" component = {Home}/>
                        <Route path ="/Customer" component= {Customer}/>
                        <Route path ="/DO" component = {Donor}/>
                        <Route path ="/RO" component = {Recipent}/>
                        <Route path ="/Regulator" component = {Regulator}/>
                        
                </div>

            </div>

</BrowserRouter>
*/}
