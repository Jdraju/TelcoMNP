import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { css } from 'aphrodite';
import { styles } from './components/styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider,observer } from 'mobx-react';
import { initStore } from '../store';

//Icons
import HomeI from 'react-icons/lib/fa/home';
import CustI from 'react-icons/lib/fa/user';
import DOI from 'react-icons/lib/fa/phone-square';
import ROI from 'react-icons/lib/fa/phone';
import RGI from 'react-icons/lib/fa/user-secret';


//Import Components
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

    customerF=()=>{
        this.store.showplans=false;
        this.store.data =[];
    }
    donorMNPGet=() => {
       this.store.getMNPRecAll('donor');
    }
    recepMNPGet=() => {
       this.store.getMNPRecAll('recep');
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
                    {/*<div className={css(styles.ibmLogo)}>
                        //<img className={css(styles.ibmLogoPic)} src = '../Media/Picture1.png' height = '100px' width = '100px' />
                    </div> */}
                    <div className={css(styles.titleText)}>
                        <b>Mobile Number Portability</b>
                    </div>
                </div>

                {/*Navigation Bar*/}         
                        <Router>
                            <div>
                                <div className={css(styles.navBar1)}>

                                    <ul className={css(styles.menuBar)}>
                                        <li className={css(styles.menuItem)}><Link className={css(styles.menuIcon)} to="/"><HomeI/>  Home</Link></li>
                                        <li className={css(styles.menuItem)} onClick={this.customerF}><Link className={css(styles.menuIcon)} to="/Customer"><CustI/>  Customer</Link></li>
                                        <li className={css(styles.menuItem)} onClick={this.donorMNPGet} ><Link className={css(styles.menuIcon)} to="/DO"><DOI/>  Donor CSP</Link></li>
                                        <li className={css(styles.menuItem)} onClick={this.recepMNPGet}><Link className={css(styles.menuIcon)} to="/RO"><ROI/>  Recipient CSP</Link></li>
                                        <li className={css(styles.menuItem)}><Link className={css(styles.menuIcon)} to="/Regulator"><RGI/>  Regulator</Link></li>

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
