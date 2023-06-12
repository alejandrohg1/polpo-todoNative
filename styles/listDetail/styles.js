import { StyleSheet } from "react-native-web";

import { FONTS, COLORS } from '../../constants/theme';


export const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,

  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:(isEditable)=> ({
    fontFamily: FONTS.bold,
    fontSize: 22,
    width: 200,
    borderBottom: isEditable ? "1px solid #000" : "none",
  }),
  mainTextContainer: {
    minHeight: 100,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    padding: 10,
    gap: 10,
    boxShadow: "inset 0 0 4px #000"
  },
  importantText: {
    fontFamily: FONTS.light,
    fontSize: 40,
    textAlign: 'right',
    color: COLORS.white,
  },


  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  textInput: {
    backgroundColor: COLORS.tertiary,
    borderRadius: 20,
    padding: 10,
    border: "1px solid #000",
    flex: 0.9,
  },




  //tags styles
  tagsContainer: {

    flexDirection: 'row',
    gap: 10,
    padding: 10,
    flexWrap: 'wrap',
    

  },
  tagInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    minWidth: 90,
    backgroundColor: COLORS.secondary,
    height: 30,
    borderRadius: 50,
    gap: 10,
  },

  tagText: {
    fontFamily: FONTS.regular,
  },



  //task styles

  taskContainer: {
    backgroundColor: COLORS.ligthPrimary,
    justifyContent: 'space-between',
    padding: 30,
    height: 150,
    gap: 10,
  },
  taskName: (completed) => ({
    fontFamily: FONTS.regular,
    fontSize: 18,
    textDecorationLine: completed ? 'line-through' : 'none',
  }),
  taskTitle: {
    fontFamily: FONTS.bold,
    fontSize: 25,

  },
  taskTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

})