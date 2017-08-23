import {StyleSheet} from 'aphrodite'

export const styles = StyleSheet.create({



//outer wrapper
pageWrap:{
height:'1000px',
width:'100%',
backgroundColor:'#c0c0c0',
},


titleBar: {
    backgroundColor:'#42c8f4',
    height:'150px',
    width:'100%',
    boxShadow: '2px 2px 2px #888888',
    border: '1px solid #e7e7e7',
    background: '-webkit-gradient(linear, left top, right top, from(#36D7B7), to(#2b303b))',
    background: '-webkit-linear-gradient(left, #36D7B7, #2b303b)',
    background: '-o-linear-gradient(left, #36D7B7, #2b303b)',
    background: 'linear-gradient(90deg, #36D7B7, #2b303b)',

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
    width:'100%',
    textAlign:'center',
    fontSize:'35px',
    padding:'10px',
    color:'white',
    //padding:'70px 0px',
    lineHeight:'150px',

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
    color:'white',
    //border: '1px solid #e7e7e7',
},

menuItem:{
    //color:'white',
    width:'100px',
    float:'left',
    fontSize:'12px',
    listStyleType: 'none',
    //paddingRight:'10px',
    textAlign:'center',
    //borderRight: '1px solid #bbb',
    height:'100%',
    paddingTop:'5px',
    ':hover':{
        backgroundColor: '#36D7B7',
    },
},
menuIcon:{
    color:'white',
},


//Main Navigation
navBar1: {
    allign: 'left',
    //width: '150px',
    width:'100%',
    fontSize:'10px',
    height:'95%',
    height:'25px',
    //boxShadow: '2px 0px 2px #888888',
    //float:'left',
    margin: '2px',
},

dropdown:{
    backgroundColor:'silver',
    opacity:'.2',
},

//content
indexContent:{
    height:'90%',
    //width: '85.5%',
    width:'95%',
    //boxShadow: '2px 2px 2px 2px #888888',
    float:'left',
    margin:'2.5%',
    backgroundColor:'white',
    borderRadius:'5px',
    padding:'30px',
    boxShadow: '2px 2px 2px #888888',


},


})
