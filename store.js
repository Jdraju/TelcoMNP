import { observable } from 'mobx'
import request from 'superagent'
import React from 'react'
import ReactDOM from 'react-dom'
let regeneratorRuntime =  require("regenerator-runtime");


let store = null

class Store {

  @observable data=[];
  
  @observable data2=[];
    @observable dataR=[];
  
  @observable data2R=[];
  @observable dataDonorOut=[];
  @observable dataDonorIn=[];
  @observable dataRecepOut=[];
  @observable dataRecepIn=[];
  @observable blocks=[];
   @observable currblock=[];
  @observable sigimg="../../media/nosignal.png";


  @observable showplans=false;
  @observable trackmnp=false;
  @observable mnpexits=false;
  @observable nomnp=false;
  @observable useracc=false;
  @observable userfail=false;
  @observable mnpcomplete=false;
  @observable regshow1=false;
  @observable regshow2=false;
  @observable regshow3=false;
  @observable regshow4=false;
  @observable currnum;
  @observable textValid=false;

   


   getUserData=async(num)=>{
     this.data=[];
     try{
     let msdata = await request
      .get('//172.27.12.46:3000/api/MSISDN/num:'+num);
      //console.log(msdata);
    //let contentType = msdata.headers.get("content-type");
    

    
      let temp = JSON.parse(msdata.text);
      temp.num=temp.num.split(':')[1];
      temp.servpro=temp.servpro.split('#')[1].split(':')[1];
     this.data = this.data.concat(temp);
     this.currnum=num;
     console.log(this.data);
     return true;
     }
     catch(Error)
     {
        console.log('Error');
        return false;
     }

   }

      getUserDataR=async(num)=>{
     this.dataR=[];
     try{
     let msdata = await request
      .get('//172.27.12.46:3000/api/MSISDN/num:'+num);
      //console.log(msdata);
    //let contentType = msdata.headers.get("content-type");
    

    
      let temp = JSON.parse(msdata.text);
      temp.num=temp.num.split(':')[1];
      temp.servpro=temp.servpro.split('#')[1].split(':')[1];
     this.dataR = this.data.concat(temp);
     this.currnum=num;
     console.log(this.data);
     return true;
     }
     catch(Error)
     {
        console.log('Error');
        return false;
     }

   }


   mnpExitsCheck= async (num) =>{
     this.mnpMatch=false;
     let msdata = await request
      .get('//172.27.12.46:3000/api/MNPREC');
      for(var i=0;i<JSON.parse(msdata.text).length;i++){
        let temp = JSON.parse(msdata.text)[i];
           temp.user=temp.user.split('#')[1].split(':')[1];
           temp.cspold=temp.cspold.split('#')[1].split(':')[1];
           temp.cspnew=temp.cspnew.split('#')[1].split(':')[1];
        if(temp.user==num)
        {
          console.log("match");
          this.data2=[];
          this.data2 = this.data2.concat(temp);
          this.mnpMatch=true;
          return true;
        }
  
      }
      return false;
   }


      mnpExitsCheckR= async (num) =>{
     this.mnpMatch=false;
     let msdata = await request
      .get('//172.27.12.46:3000/api/MNPREC');
      for(var i=0;i<JSON.parse(msdata.text).length;i++){
        let temp = JSON.parse(msdata.text)[i];
           temp.user=temp.user.split('#')[1].split(':')[1];
           temp.cspold=temp.cspold.split('#')[1].split(':')[1];
           temp.cspnew=temp.cspnew.split('#')[1].split(':')[1];
        if(temp.user==num)
        {
          console.log("match");
          this.data2R=[];
          this.data2R = this.data2.concat(temp);
          this.mnpMatch=true;
          return true;
        }
  
      }
      return false;
   }



   delMNPRecAll=async()=>{

     let msdata = await request
      .get('http://172.27.12.46:3000/api/MNPREC');

        for(var i=0;i<JSON.parse(msdata.text).length;i++){
          let temp = JSON.parse(msdata.text)[i];
      
          let msdel = await request.delete('http://172.27.12.46:3000/api/MNPREC/'+temp.recid);

      }
     return 1

   }



   getMNPRecAll=async(csp)=>{

     let msdata = await request
      .get('http://172.27.12.46:3000/api/MNPREC');
      if(csp=='donor'){
        this.dataDonorOut=[];
        this.dataDonorIn=[];
        console.log(JSON.parse(msdata.text).length);
        for(var i=0;i<JSON.parse(msdata.text).length;i++){
          let temp = JSON.parse(msdata.text)[i];
           temp.user=temp.user.split('#')[1].split(':')[1];
           temp.cspold=temp.cspold.split('#')[1].split(':')[1];
           temp.cspnew=temp.cspnew.split('#')[1].split(':')[1];
        if(temp.cspold=="ABC")
         {
           this.dataDonorOut = this.dataDonorOut.concat(temp);
         }
        else if(temp.cspnew=="ABC")
        {
          this.dataDonorIn = this.dataDonorIn.concat(temp);
        }

      }
      }

      if(csp=='recep'){
        this.dataRecepOut=[];
        this.dataRecepIn=[];
        for(var i=0;i<JSON.parse(msdata.text).length;i++){
          let temp = JSON.parse(msdata.text)[i];
           temp.user=temp.user.split('#')[1].split(':')[1];
           temp.cspold=temp.cspold.split('#')[1].split(':')[1];
           temp.cspnew=temp.cspnew.split('#')[1].split(':')[1];
        if(temp.cspold=="XYZ")
         {
           this.dataRecepOut = this.dataRecepOut.concat(temp);
         }
        else if(temp.cspnew=="XYZ")
        {
          this.dataRecepIn = this.dataRecepIn.concat(temp);
        }

      }
      }

     return 1

   }

   //////////////////////////////////////////////////////////////////////////////////////////////////////////////

   userinimnp=async(num,r)=>{

     var today = new Date();
     var dd = today.getDate();
     var mm = today.getMonth()+1; //January is 0!

     var yyyy = today.getFullYear();
     if(dd<10){
          dd='0'+dd;
      } 
     if(mm<10){
          mm='0'+mm;
      } 
      var today = mm+'/'+dd+'/'+yyyy;
      console.log(today);
      let msdata1 = await request
      .get('//172.27.12.46:3000/api/MSISDN/num:'+num);
      let temp = JSON.parse(msdata1.text);
      let cspo=temp.servpro;
      let cspn='NA';
      if(temp.servpro=="resource:org.acme.sample.CSP#name:ABC"){
        cspn='resource:org.acme.sample.CSP#name:XYZ';
      }
      else{
        cspn='resource:org.acme.sample.CSP#name:ABC';
      }

     let msdata = await request
      .post('//172.27.12.46:3000/api/MNPREC')
      .type('form')
      .send({
                              $class: "org.acme.sample.MNPREC",
                              recid: "mnp"+num,
                              user: "resource:org.acme.sample.MSISDN#num:"+num,
                              cspold: cspo,
                              cspnew: cspn,
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
                                PlanId: "PlanB",
                                ServiceValidity: "unlimmited",
                                TalktimeBalance: "unlimited",
                                SMSbalance: "unlimited",
                                DataBalance: "2GB",
                                Price: "120$"
                              },
                              reason:r,
                              starttime:today.toString(),
                              status: "User Confirmation"


        

      })
      let t = JSON.parse(msdata.text);
      t.$class=t.$class.split('.')[3];
       t.user=t.user.split('#')[1].split(':')[1];
        t.cspnew=t.cspnew.split('#')[1].split(':')[1];
         t.cspold=t.cspold.split('#')[1].split(':')[1];
      if(t.plannew)
         {
             t.plannew=t.plannew.PlanId;
         }
      if(t.planold)
         {
             t.planold=t.planold.PlanId;
         }
      this.blocks=this.blocks.concat(t);
   
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
   
      let t = JSON.parse(msdata.text);
       t.$class=t.$class.split('.')[3];
      t.asset=t.asset.split('#')[1];
      this.blocks=this.blocks.concat(t);
     return 1
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
donorapproves=async(mnpid)=>{
  console.log(mnpid);
let msdata = await request
      .post('//172.27.12.46:3000/api/UsageDetailsFromDonorCSP')
      .type('form')
      .send({
                              $class: "org.acme.sample.UsageDetailsFromDonorCSP",
                              asset: "resource:org.acme.sample.MNPREC#"+mnpid,
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
      let t = JSON.parse(msdata.text);
      if(t.plancurr)
         {
             t.plancurr=t.plancurr.PlanId;
         }
      t.$class=t.$class.split('.')[3];
      t.asset=t.asset.split('#')[1];
      this.blocks=this.blocks.concat(t);
   

     return 1
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
recipientoffer=async(mnpid,plan)=>{
let msdata = await request
      .post('//172.27.12.46:3000/api/RecipientCSPOffer')
      .type('form')
      .send({
                              $class: "org.acme.sample.RecipientCSPOffer",
                              asset: "resource:org.acme.sample.MNPREC#"+mnpid,
                              cspnew: "resource:org.acme.sample.CSP#name:XYZ",
                              plannew: {
                                $class: "org.acme.sample.Plan",
                                PlanId: plan,
                                ServiceValidity: "2",
                                TalktimeBalance: "2",
                                SMSbalance: "2",
                                DataBalance: "2",
                                Price: "2"
                                },
                              status: "Recipient Offer"

        

      })
      let t = JSON.parse(msdata.text);
      t.$class=t.$class.split('.')[3];
      t.asset=t.asset.split('#')[1];
      if(t.plannew)
         {
             t.plannew=t.plannew.PlanId;
         }
      this.blocks=this.blocks.concat(t);
   

     return 1
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
useraccepts=async(mnpid)=>{
let msdata = await request
      .post('//172.27.12.46:3000/api/UserAccept')
      .type('form')
      .send({
                              $class: "org.acme.sample.UserAccept",
                              asset: "resource:org.acme.sample.MNPREC#"+mnpid,
                              status: "User Accepts"

          })
   
    let t = JSON.parse(msdata.text);
     t.$class=t.$class.split('.')[3];
      t.asset=t.asset.split('#')[1];
      this.blocks=this.blocks.concat(t);
     return 1
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
simactivate=async(num)=>{

let msdata1 = await request
      .get('//172.27.12.46:3000/api/MSISDN/num:'+num);
      let temp = JSON.parse(msdata1.text);
      let cspo=temp.servpro;
      let cspn='NA';
      if(temp.servpro=="resource:org.acme.sample.CSP#name:ABC"){
        cspn='resource:org.acme.sample.CSP#name:XYZ';
      }
      else{
        cspn='resource:org.acme.sample.CSP#name:ABC';
      }

let msdata = await request
      .post('//172.27.12.46:3000/api/SimActivated')
      .type('form')
      .send({
                              $class: "org.acme.sample.SimActivated",
                              "asset": "resource:org.acme.sample.MSISDN#num:"+num,
                              "cspnew": cspn

        

      })
   
     let t = JSON.parse(msdata.text);
      t.$class=t.$class.split('.')[3];
      t.asset=t.asset.split('#')[1];
      this.blocks=this.blocks.concat(t);
     return 1
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  constructor (isServer) {

   this.showplans=false;
   this.trackmnp=false;
   this.mnpexits=false;
   this.nomnp=false;
   this.useracc=false;
   this.userfail=false;
   this.mnpcomplete=false;
   this.regshow1=false;
   this.regshow2=false;
   this.regshow3=false;
   this.regshow4=false;
   this.textValid=false;
   this.currnum="4690001234"
   
  
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