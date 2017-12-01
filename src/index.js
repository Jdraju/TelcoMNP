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
import { Button,DropdownButton,MenuItem } from 'react-bootstrap';
import Loading from 'react-loading-animation';
import CSSTransitionGroup from 'react-addons-css-transition-group';

//Icons
import HomeI from 'react-icons/lib/fa/home';
import CustI from 'react-icons/lib/fa/user';
import DOI from 'react-icons/lib/fa/phone-square';
import ROI from 'react-icons/lib/fa/phone';
import RGI from 'react-icons/lib/fa/user-secret';
import Reset from 'react-icons/lib/fa/align-justify';

//Import Components
import Customer from './components/Customer/customer';
import Donor from './components/DO/donor';
import Recipent from './components/RO/recipient';
import Regulator from './components/Regulator/regulator';
import Home from './components/Home/home';
import SimInsert from './components/SimInsert/sim';
import SMSUpdates from './components/smsupdates/sms';
import Load from './components/Loading/loading';
import Blocks from './components/Blocks/blocks';





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
        this.state = {isShow:false};
        

    }

    showBlocks=()=>{
        console.log('button works');
        if (this.state.isShow)
        {console.log('button works2');
            this.setState({ isShow: false });
        }
        else{console.log('button works3');
           this.setState({ isShow: true }); 
        }
        
    }

    reset=()=>{
        this.store.showplans=false;
   this.store.trackmnp=false;
   this.store.mnpexits=false;
   this.store.nomnp=false;
   this.store.useracc=false;
   this.store.userfail=false;
   this.store.mnpcomplete=false;
   this.store.regshow1=false;
   this.store.regshow2=false;
   this.store.regshow3=false;
   this.store.regshow4=false;
   this.store.textValid=false;
    }

    delRecords=()=>{
      this.store.delMNPRecAll();
    }

    customerF=()=>{
        this.store.showplans=false;
        this.store.data =[];
         this.reset;
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
   
    renderSimInsert = () => {
        return <SimInsert />;
    }

    renderSMSUpdates = () => {
        return <SMSUpdates />;
    }

    renderLoad = () => {
        return <Load />;
    }
    renderBlocks = () => {
        return <Blocks />;
    }

    SlideBox() {
          return (
           <Blocks/>
              )
           }


    render() {

       let blockcomponent = this.state.isShow ? this.SlideBox() : '';
       
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
                                        <li className={css(styles.menuItem)} onClick={this.donorMNPGet} ><Link className={css(styles.menuIcon)} to="/DO"><DOI/>ABC CSP</Link></li>
                                        <li className={css(styles.menuItem)} onClick={this.recepMNPGet}><Link className={css(styles.menuIcon)} to="/RO"><ROI/>  XYZ CSP</Link></li>
                                        <li className={css(styles.menuItem)} onClick={this.reset}><Link className={css(styles.menuIcon)} to="/Regulator"><RGI/>  Regulator</Link></li>
                                        <li className={css(styles.menuItem)}><Link className={css(styles.menuIcon)} to="/SimInsert"><RGI/>  SimInsert</Link></li>
                                        <li className={css(styles.menuItem)}><Link className={css(styles.menuIcon)} to="/SMSUpdates"><RGI/>  SMSUpdates</Link></li>
                                        <li className={css(styles.menuItem)}><Link className={css(styles.menuIcon)} to="/Blocks"><RGI/>  Block View</Link></li>
                                    </ul>
                                    <DropdownButton title={<Reset/>} id={"1"}className={css(styles.dropdown)}>
                                <MenuItem eventKey="1" onClick={this.delRecords}>Reset Demo</MenuItem>
                            </DropdownButton>
                                </div>
                                
                                <div className={css(styles.indexContent)}>
                                    <Route exact path ="/" render={this.renderHome}/>
                                    <Route path ="/Customer" render={this.renderCustomer}/>
                                    <Route path ="/DO" render={this.renderDonor}/>
                                    <Route path ="/RO" render={this.renderRecipent}/>
                                    <Route path ="/Regulator" render={this.renderRegulator}/>
                                    <Route path ="/SimInsert" render={this.renderSimInsert}/>
                                    <Route path ="/SMSUpdates" render={this.renderSMSUpdates}/>
                                    <Route path ="/Loading" render={this.renderLoad}/>
                                    <Route path ="/Blocks" render={this.renderBlocks}/>
                                

                               {/* <CSSTransitionGroup
                                    transitionName="slide"
                                    transitionAppear={true}
                                    transitionAppearTimeout={500}
                                    transitionEnterTimeout={300}
                                    transitionLeaveTimeout={300}
                                     >
                                    {blockcomponent}
                                </CSSTransitionGroup>*/}
                                  
                               
                               </div>

                                 {/*<Button onClick={this.showBlocks}>View Blocks</Button>*/}
                              
                            </div>
                        </Router>
                    
                  
           
                
            </div>
        </Provider>
        );
    }
}


ReactDOM.render(<RR4 />,document.querySelector('.container1'));
