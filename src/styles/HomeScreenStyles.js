import { StyleSheet } from "react-native";
import colors from "../themes/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    header: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
    },
    contentContainer: {
      paddingVertical: 10,
    },
    sliderContainer: {
      height: 200,
      marginTop: 20,
      marginBottom: 10,
      borderRadius: 20,
      paddingHorizontal: 10
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    quoteIcon: {
      marginBottom: 10,
    },
    quoteText: {
      fontSize: 20,
      fontStyle: 'italic',
      color: colors.text,
      textAlign: 'center',
      marginBottom: 10,
    },
    authorText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: 'right',
    },
    sectionContainer: {
      marginTop: 20,
      backgroundColor: colors.center,
      padding: 15,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    mainSectionContainer: {
      marginTop: 20,
      backgroundColor: colors.top,
      padding: 15,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      alignSelf: 'center'
    },
    sectionTitle: {
      fontSize: 18,
      color: colors.text,
    },
    listTitle: {
      fontSize: 17,
      color: colors.text,
      marginBottom: 10,
    },
    sectionSubTitle: {
      fontSize: 15,
      color: colors.text,
      marginBottom: 10,
    },
    sectionText: {
      fontSize: 16,
      color: colors.text,
      lineHeight: 24,
    },
  });
  

export default styles;