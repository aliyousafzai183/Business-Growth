import { StyleSheet } from "react-native";
import colors from "../themes/colors";



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:50,
      justifyContent:'flex-start'
    },
    content: {
      padding: 50,
      backgroundColor: colors.center,
      borderRadius: 10,
      alignItems: 'center',
      borderRadius:100
    },
    titleContainer: {
      paddingVertical: 10,
      paddingHorizontal:20,
      backgroundColor: colors.center,
      borderRadius: 10,
      alignItems: 'center',
      borderRadius:100,
      marginVertical:50,
      alignItems:'center'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: 'center',
      marginBottom: 10,
      color:colors.text
    },
    description: {
      fontSize: 18,
      color: colors.text,
      textAlign: 'center'
    }
  });

export default styles;