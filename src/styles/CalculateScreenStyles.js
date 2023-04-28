import { StyleSheet } from "react-native";
import colors from "../themes/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    gradient: {
        flex: 1,
    },
    header: {
        marginTop: 50,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    formContainer: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: colors.center,
        padding: 50,
        borderRadius: 100
    },
    inputLabel: {
        fontSize: 16,
        color: colors.text,
        marginBottom: 10,
        color: colors.text
    },
    textInput: {
        backgroundColor: colors.text,
        padding: 10,
        borderRadius: 30,
        textAlign: 'center',
        color: colors.buttonBackground
    },
    checkButton: {
        backgroundColor: colors.top,
        padding: 10,
        marginTop: 30,
        alignItems: 'center',
        width: '40%',
        alignSelf: 'flex-end',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
    },
    checkButtonText: {
        color: colors.text,
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default styles;