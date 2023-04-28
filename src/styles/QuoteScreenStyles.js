import { StyleSheet } from "react-native";
import colors from "../themes/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20
    },
    quoteContainer: {
      backgroundColor: colors.bottom,
      padding: 20,
      borderRadius: 10,
    },
    quoteText: {
      fontSize: 24,
      fontStyle: 'italic',
      textAlign: 'center',
      color: colors.buttonBackground
    },
    button: {
      marginTop: 20,
      backgroundColor: colors.buttonBackground,
      padding: 10,
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
    },
  });

export default styles;