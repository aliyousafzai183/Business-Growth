import { StyleSheet } from "react-native";
import colors from '../../themes/colors';



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: 'center',
      marginTop: 40,
    },
  
    subTitle: {
      fontSize: 18,
      color: colors.text,
      textAlign: 'center',
      marginTop: 40,
      width: '80%'
    },
  
    button: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginTop: 40,
    },
    buttonText: {
      fontSize: 18,
      color: colors.text,
      textAlign: 'center',
    },
    iconContainer: {
      backgroundColor: colors.bottom,
      paddingHorizontal: 1,
      borderRadius: 100,
      marginBottom: 30,
      paddingVertical: 1,
    },
    buttonContainer: {
      width: '100%',
      alignItems: 'flex-end',
    },
  });
  

export default styles;