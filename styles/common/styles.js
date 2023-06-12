import { StyleSheet } from "react-native-web";

import {FONTS, COLORS} from '../../constants/theme';

export const commonStyles = StyleSheet.create({
  textInput:{
    backgroundColor: COLORS.tertiary,
    borderRadius: 10,
    padding: 20,
    flex: 1
  },
  inputLabel:{
    fontFamily: FONTS.bold,
    fontSize: 20,
    marginBottom: 10,
  },
  button:{
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  textButton:{
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: 20,
  },
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: 10 / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: 10 / 1.25,
  }),


   //nothing componentes
   nothingContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:30
  },
  nothingText:{
    fontFamily: FONTS.regular,
    fontSize: 30, 
    textAlign: 'center',
  }
})