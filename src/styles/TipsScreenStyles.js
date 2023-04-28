import { StyleSheet } from "react-native";
import colors from "../themes/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: 10,
      color: colors.text,
      textAlign: 'center',
      marginBottom:20
    },
    tipContainer: {
      padding: 10
    },
    tipTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      textAlign: 'center',
      color:colors.text
    },
    author: {
      fontSize: 14
    },
    sectionContainer: {
      marginBottom: 20,
      backgroundColor: colors.center,
      padding: 15,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
  

export default styles;