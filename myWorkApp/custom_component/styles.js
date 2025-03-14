
//This is the stylesheet of the screen. It has been created as a component

import { StyleSheet,View,Text } from "react-native";


export const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F7F0E8',
    flex:1,
    paddingTop:52,
  },

  header:{
    height:52,
    display :'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft: 20,
    marginBottom:30,
    marginRight:20
  },

  bigHeaderText:{
    fontSize: 32,
    fontWeight:700,
    marginLeft: 20
  },

  smallHeaderText:{
    fontSize: 12, 
    marginLeft: 20
  },

  profileIconBackground:{
    backgroundColor:'white',
    height: 50,
    width:50,
    borderRadius: 25,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  profileIconImage:{
    width:46,
    height: 45
  },

  inputFilterContainer:{
    height:49,
    marginLeft:20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom: 30,
    marginRight:20
  },

  inputContainer:{
    backgroundColor:'white', 
    width:280,
    height: 48,
    paddingLeft: 45,
    borderRadius: 14,
    fontWeight:700,
    fontSize:16,
  },

  filterBackground:{
    backgroundColor:'#F0522F',
    height: 48,
    width: 50,
    borderRadius: 14,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  categorySection:{
    fontSize:20,
    fontStyle:'lato',
    fontWeight:700,
    marginLeft :20,
    marginBottom:12
  },
  
  search:{
    position:'absolute',
    top:15,
    left:14.97
  },

  taskCardHolder:{
    marginLeft: 20,
    marginRight: 20,
    marginBottom:27
    // width:396,
    // height:192,
   
    
  },

  eachTaskCard:{
    backgroundColor:'white',
    width:186,
    height:192,
    borderRadius: 15,
    marginLeft: 24,
    paddingTop: 14,
    paddingLeft: 16,
    height:192,
    width:186
  },

  taskTitle:{
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'lato'
  },

  taskNumber:{
    fontSize: 12,
  },

  ongoingTask:{
    marginLeft: 20,
    marginRight: 20,
    height: 450,
  },

  ongoingTaskContainer:{
    height:128,
    backgroundColor:'white',
    marginBottom: 12,
    borderRadius: 15,
    borderColor:'#E8D1BA',
    borderWidth: 2,
    paddingTop: 46,
    paddingLeft: 16
  },

  ongoingTaskSection:{
    fontSize:20,
    fontStyle:'lato',
    fontWeight:700,
    marginLeft :20,
    marginBottom:12
  },

  ongoingTaskName:{
    fontSize:16,
    fontWeight:700,
    fontFamily:'lato'
  },
  




  
})




