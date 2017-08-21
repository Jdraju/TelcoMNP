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
  @observable dataDonorIn=[];
  @observable dataRecepOut=[];
  @observable dataRecepIn=[];


  @observable showplans=false;
  @observable trackmnp=false;
  @observable mnpexits=false;
  @observable nomnp=false;


   


   getUserData=async(num)=>{

     let msdata = await request
      .get('//172.27.12.46:3000/api/MSISDN/num:'+num);
     this.data = this.data.concat(JSON.parse(msdata.text));
     console.log(this.data);
     return 1

   }

   mnpExitsCheck= async (num) =>{
     this.mnpMatch=false;
     let msdata = await request
      .get('//172.27.12.46:3000/api/MNPREC');
      for(var i=0;i<JSON.parse(msdata.text).length;i++){
       
        if(JSON.parse(msdata.text)[i].user=='resource:org.acme.sample.MSISDN#num:'+num)
        {
          console.log("match");
          this.data2=[];
          this.data2 = this.data2.concat(JSON.parse(msdata.text)[i]);
          this.mnpMatch=true;
          return true;
        }
  
      }
      return false;
   }

   getMNPRecAll=async(csp)=>{

     let msdata = await request
      .get('http://172.27.12.46:3000/api/MNPREC');
      if(csp=='donor'){
        this.dataDonorOut=[];
        this.dataDonorIn=[];
        console.log(JSON.parse(msdata.text).length);
        for(var i=0;i<JSON.parse(msdata.text).length;i++){
        if(JSON.parse(msdata.text)[i].cspold=="resource:org.acme.sample.CSP#name:ABC")
         {
           this.dataDonorOut = this.dataDonorOut.concat(JSON.parse(msdata.text)[i]);
         }
        else if(JSON.parse(msdata.text)[i].cspnew=="resource:org.acme.sample.CSP#name:ABC")
        {
          this.dataDonorIn = this.dataDonorIn.concat(JSON.parse(msdata.text)[i]);
        }

      }
      }

      if(csp=='recep'){
        this.dataRecepOut=[];
        this.dataRecepIn=[];
        for(var i=0;i<JSON.parse(msdata.text).length;i++){
        if(JSON.parse(msdata.text)[i].cspold=="resource:org.acme.sample.CSP#name:XYZ")
         {
           this.dataRecepOut = this.dataRecepOut.concat(JSON.parse(msdata.text)[i]);
         }
        else if(JSON.parse(msdata.text)[i].cspnew=="resource:org.acme.sample.CSP#name:XYZ")
        {
          this.dataRecepIn = this.dataRecepIn.concat(JSON.parse(msdata.text)[i]);
        }

      }
      }

     return 1

   }

   //////////////////////////////////////////////////////////////////////////////////////////////////////////////

   userinimnp=async(num)=>{
     let msdata = await request
      .post('//172.27.12.46:3000/api/MNPREC')
      .type('form')
      .send({
                              $class: "org.acme.sample.MNPREC",
                              recid: "mnp"+num,
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
   this.trackmnp=false
   this.mnpexits=false;;
   this.nomnp=false;;
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