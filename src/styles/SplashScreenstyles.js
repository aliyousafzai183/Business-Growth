import { StyleSheet } from "react-native";
import colors from "../themes/colors";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    logo: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
    text: {
      marginBottom: 50,
      fontSize: 24,
      color: colors.text,
    },
  });

export default styles;