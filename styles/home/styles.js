import { StyleSheet } from "react-native-web";

import {FONTS, COLORS} from '../../constants/theme';


export const styles = StyleSheet.create({
  mainTextContainer:{
    flex: 0.25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    padding: 10,
    gap: 10,
    boxShadow: "inset 0 0 4px #000"
  },
  title:{
    fontFamily: FONTS.bold,
    fontSize: 25,
    color: COLORS.white,
  },
  subtitle:{
    fontFamily: FONTS.regular,
    fontSize: 20,
    color: COLORS.white,
    
  },
  formContainer:{
    padding: 20,
    
  },
  regularText:{
    fontFamily: FONTS.regular,
    fontSize: 20
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textInput:{
    backgroundColor: COLORS.tertiary,
    borderRadius: 20,
    padding: 10,
    border: "1px solid #000",
    flex: 0.9,
  },
  importantText:{
    fontFamily: FONTS.bold,
    fontSize: 20,
    marginTop: 30,
  },




  //List Styles
  listContainer:{
    flex: 1,
    paddingTop:0,
    padding: 20,
    
  },

  listItem:{
    backgroundColor: COLORS.ligthPrimary,
    justifyContent: 'end',
    height: 120,
    padding: 10,
    gap: 5,
    marginTop: 10,
  },
  keywordText:{
    fontFamily: FONTS.light,
    fontSize: 16,
    color: COLORS.white,
  },


 

})