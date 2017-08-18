import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { css } from 'aphrodite'
import { styles } from './components/styles.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider,observer } from 'mobx-react'
import { initStore } from '../store'


import Customer from './components/Customer/customer';
import Donor from './components/DO/donor';
import Recipent from './components/RO/recipient';
import Regulator from './components/Regulator/regulator';
import Home from './components/Home/home';





//const SideNav = withRR4();


@observer
export default class RR4 extends React.Component {

    getInitialProps({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return {isServer}
  }

    constructor(props) {
        super(props);
        this.store = initStore(props.isServer);

    }


    donorMNPGet=() => {
       this.store.getMNPRec('donor');
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
        return (<Provider store={this.store}>
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
                

                        
                        <Router>
                            <div>
                                <div className={css(styles.navBar1)}>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/Customer">Customer</Link></li>
                                        <li onClick={this.donorMNPGet}><Link to="/DO">Donor CSP</Link></li>
                                        <li><Link to="/RO">Recipient CSP</Link></li>
                                        <li><Link to="/Regulator">Regulator</Link></li>
                                    </ul>
                                </div>
                                <div className={css(styles.indexContent)}>

                                    
                                    <Route exact path ="/" render={this.renderHome}/>
                                    <Route path ="/Customer" render={this.renderCustomer}/>
                                    <Route path ="/DO" render={this.renderDonor}/>
                                    <Route path ="/RO" render={this.renderRecipent}/>
                                    <Route path ="/Regulator" render={this.renderRegulator}/>
                                </div>
                            </div>
                        </Router>
                    
                    {/* Content*/}
            </div>
            </Provider>
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
