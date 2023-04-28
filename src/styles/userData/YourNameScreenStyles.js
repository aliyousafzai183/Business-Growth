import { StyleSheet } from "react-native";
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleContainer: {
      marginTop: 50,
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: colors.text,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    iconContainer: {
      backgroundColor: colors.bottom,
      padding: 20,
      borderRadius: 50,
      marginBottom: 30,
    },
    inputContainer: {
      marginBottom: 30,
      width: '100%',
    },
    label: {
      color: colors.text,
      fontSize: 18,
      marginBottom: 10,
    },
    input: {
      backgroundColor: colors.text,
      borderRadius: 20,
      paddingHorizontal: 20,
      height: 50,
      color: colors.buttonBackground
    },
    error: {
      color: colors.error,
      fontSize: 14,
      marginTop: 5,
    },
    buttonContainer: {
      width: '100%',
      alignItems: 'flex-end',
    },
    nextButton: {
      backgroundColor: colors.buttonBackground,
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 20,
    },
    nextButtonText: {
      color: colors.text,
      fontSize: 18,
    },
  });

export default styles;