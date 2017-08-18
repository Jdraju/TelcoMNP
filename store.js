import { observable } from 'mobx'
import request from 'superagent'
import React from 'react'
import ReactDOM from 'react-dom'
let regeneratorRuntime =  require("regenerator-runtime");


let store = null

class Store {

  @observable data=[];
  
  @observable data2=[];
  @observable dataDonorOut=[];

  @observable showplans=false;

   

   getUserData=async(num)=>{

     let msdata = await request
      .get('//172.27.12.46:3000/api/MSISDN/num:'+num);
     this.data = this.data.concat(JSON.parse(msdata.text));
     console.log(this.data);
     return 1

   }

   getMNPRec=async(csp)=>{

     let msdata = await request
      .get('//172.27.12.46:3000/api/MNPREC/mnp124');
      if(csp=='donor'){
        this.dataDonorOut = this.dataDonorOut.concat(JSON.parse(msdata.text));
      }
       this.data2 = this.data2.concat(JSON.parse(msdata.text));
     console.log(this.data2);
     return 1

   }

   //////////////////////////////////////////////////////////////////////////////////////////////////////////////

   userinimnp=async(num)=>{
     let msdata = await request
      .post('//172.27.12.46:3000/api/MNPREC')
      .type('form')
      .send({
                              $class: "org.acme.sample.MNPREC",
                              recid: "mnp124",
                              user: "resource:org.acme.sample.MSISDN#num:"+num,
                              cspold: "resource:org.acme.sample.CSP#name:ABC",
                              cspnew: "resource:org.acme.sample.CSP#name:XYZ",
                              planold: {
                                $class: "org.acme.sample.Plan",
                                PlanId: "",
                                ServiceValidity: "",
                                TalktimeBalance: "",
                                SMSbalance: "",
                                DataBalance: "",
                                Price: ""
                                },
                              plannew: {
                                $class: "org.acme.sample.Plan",
                                PlanId: "",
                                ServiceValidity: "",
                                TalktimeBalance: "",
                                SMSbalance: "",
                                DataBalance: "",
                                Price: ""
                                },
                              status: "User Initiation"

        

      })
   
     return 1
   }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
connfirmmnpreq=async()=>{
let msdata = await request
      .post('//172.27.12.46:3000/api/ConfirmationOfMNPRequest')
      .type('form')
      .send({
                              $class: "org.acme.sample.ConfirmationOfMNPRequest",
                              asset: "resource:org.acme.sample.MNPREC#mnp124",
                              cspnew: "resource:org.acme.sample.CSP#name:XYZ",
                              plannew: {
                                $class: "org.acme.sample.Plan",
                                PlanId: "PlanB",
                                ServiceValidity: "2",
                                TalktimeBalance: "2",
                                SMSbalance: "2",
                                DataBalance: "2",
                                Price: "2"
                                },
                              status: "User Confirmation"

        

      })
   

     return 1
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
donorapproves=async()=>{
let msdata = await request
      .post('//172.27.12.46:3000/api/UsageDetailsFromDonorCSP')
      .type('form')
      .send({
                              $class: "org.acme.sample.UsageDetailsFromDonorCSP",
                              asset: "resource:org.acme.sample.MNPREC#mnp124",
                              plancurr: {
                                $class: "org.acme.sample.Plan",
                                PlanId: "PlanA",
                                ServiceValidity: "1",
                                TalktimeBalance: "1",
                                SMSbalance: "1",
                                DataBalance: "1",
                                Price: "1"
                                },
                              status: "Donor Approves"

        

      })
   

     return 1
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
recipientoffer=async()=>{
let msdata = await request
      .post('//172.27.12.46:3000/api/RecipientCSPOffer')
      .type('form')
      .send({
                              $class: "org.acme.sample.RecipientCSPOffer",
                              asset: "resource:org.acme.sample.MNPREC#mnp124",
                              cspnew: "resource:org.acme.sample.CSP#name:XYZ",
                              plannew: {
                                $class: "org.acme.sample.Plan",
                                PlanId: "PlanB",
                                ServiceValidity: "2",
                                TalktimeBalance: "2",
                                SMSbalance: "2",
                                DataBalance: "2",
                                Price: "2"
                                },
                              status: "Recipient Offer"

        

      })
   

     return 1
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
useraccepts=async()=>{
let msdata = await request
      .post('//172.27.12.46:3000/api/UserAccept')
      .type('form')
      .send({
                              $class: "org.acme.sample.UserAccept",
                              asset: "resource:org.acme.sample.MNPREC#mnp124",
                              status: "User Accepts"

          })
   

     return 1
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
simactivate=async()=>{
let msdata = await request
      .post('//172.27.12.46:3000/api/SimActivated')
      .type('form')
      .send({
                              $class: "org.acme.sample.SimActivated",
                              "asset": "resource:org.acme.sample.MSISDN#num:8318",
                              "cspnew": "resource:org.acme.sample.CSP#name:4408"

        

      })
   

     return 1
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  constructor (isServer) {

   this.showplans=false;
    //var usernum = document.getElementById('usernum');
    //usernum.onclick=this.props.store.getUserData;
/*
  this.inventory()
*/
  }

 

}

export function initStore (isServer) {
  if (isServer && typeof window === 'undefined') {
    return new Store(isServer)
  } else {
    if (store === null) {
      store = new Store(isServer)
    }
    return store
  }
}