import { StyleSheet } from "react-native-web";

import {FONTS, COLORS} from '../../constants/theme';

export const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.primary,
    flex: 1,
    justifyContent: 'end',
    position: 'relative',
  },
  formContainer:{
    backgroundColor: COLORS.white,
    flex: 0.77,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20
  },
  imgContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.23,
  },
  logoImage:{
    objectFit: 'cover',
    width: 120,
    height: 120,
    margin:  "auto"
  },
  title:{
    fontFamily: FONTS.bold,
    fontSize: 44,
    color: COLORS.primary,
  },
  registerText:{
    marginTop: 20,
    margin: "auto",
    fontFamily: FONTS.regular,
    fontSize: 16,
  },
  signUpText:{
    color: COLORS.primary,
  }

})