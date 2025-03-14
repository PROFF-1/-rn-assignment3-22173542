
//This is the stylesheet of the screen. It has been created as a component

import { StyleSheet,View,Text } from "react-native";


export const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F7F0E8',
    flex:1,
    paddingTop:52,
  },

  header:{
    width: 354,
    height:52,
    display :'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft: 20,
    marginBottom:30
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
    width:353,
    marginLeft:20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom: 30
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
    
  }


  
})




