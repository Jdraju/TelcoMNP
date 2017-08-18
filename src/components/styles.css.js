import {StyleSheet} from 'aphrodite'

export const styles = StyleSheet.create({

//outer wrapper
pageWrap:{
height:'850px',
width:'100%',
},


titleBar: {
    backgroundColor:'#42c8f4',
    height:'50px',
    width:'100%',
    boxShadow: '2px 2px 2px #888888',

},

ibmLogo:{
    width:'20%',
    float:'left',


},

ibmLogoPic:{
width:'75px',
height:'50px',
padding:' 1px 1px 1px 20px',


},

titleText:{
    width:'80%',
    textAlign:'center',
    fontSize:'25px',
    padding:'10px',

},
menuBar:{
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#454545',
    height:'25px',
    boxShadow: '2px 2px 2px #888888',
    padding:'0px',
    margin:'0px',



},
menuItem:{
    //color:'white',
    width:'100px',
    float:'left',
    fontSize:'12px',
    listStyleType: 'none',
    //paddingRight:'10px',
    textAlign:'center',
    borderRight: '1px solid #bbb',
    height:'100%',
    ':hover':{
        backgroundColor: '#42c8f4',
    },
    
},


//Main Navigation
navBar1: {
    allign: 'left',
    //width: '150px',
    width:'100%',
    fontSize:'10px',
    height:'95%',
    height:'75px',
    //boxShadow: '2px 0px 2px #888888',
    //float:'left',
    margin: '2px',
},

//content
indexContent:{
    height:'90%',
    //width: '85.5%',
    width:'95%',
    //boxShadow: '2px 2px 2px 2px #888888',
    float:'left',
    margin:'10px'
},



})
