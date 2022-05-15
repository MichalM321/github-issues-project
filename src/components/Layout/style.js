import { StyleSheet } from "react-native";

function Style() {

  return StyleSheet.create({
    wrapper: {
      backgroundColor: '#0d1117',
      minHeight: '100%',
    },
    childrenLayoutWrapper: {
      flex: 1,
    },
    statusBar: {
      backgroundColor: '#0d1117',
    },
    navbar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 70,
      borderBottomWidth: 2,
      borderBottomColor: '#aaa',
    },
    navTitle: {
      fontSize: 20,
      color: '#ccc',
      fontWeight: 'bold',
    },
    backButton: {
      position: 'absolute',
      left: 10,
      justifyContent: 'center',
      alignItems: 'center', 
      width: 48,
      height: 48,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#aaa',
    },
    backIcon: {
      width: 40,
      height: 40,
    }
  })
};

export default Style;