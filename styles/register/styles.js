import { StyleSheet } from "react-native-web";

import {FONTS, COLORS} from '../../constants/theme';

export const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.primary,
    flex: 1,
    justifyContent: 'end',
  },

  formContainer:{
    backgroundColor: COLORS.white,
    flex: 0.85,
    justifyContent: 'space-between',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20
  },

  mainTextContainer:{
    justifyContent: 'center',
    flex: 0.15,
    
    
  },
  title:{
    fontFamily: FONTS.bold,
    fontSize: 44,
    color: COLORS.white,
  },
  subtitle:{
    fontFamily: FONTS.light,
    fontSize: 16,
    color: COLORS.white,
    marginLeft: 20
  },
  registerText:{
    marginTop: 20,
    margin: "auto",
    fontFamily: FONTS.regular,
    fontSize: 16,
  },
  signUpText:{
    color: COLORS.primary,
  },





})