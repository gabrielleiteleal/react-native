import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#538cb0ff',
        width: '100%',
        height: 'auto',
        marginBottom: 10,
        gap: 5,
        justifyContent: 'center',
    },
    containerImg: {
        width: '100',
        height: '100',
        padding: 5,
    },
    containerText: {
        width: '72%',
        justifyContent: 'flex-start',
        paddingTop: 5,
        gap: 10
    },
    title: {
        fontSize: 20,
        width: '100%',
        height: 'auto',
        backgroundColor: '#b1d5f8ff',
        borderRadius: 5
    },
    description: {
        fontSize: 15,
        backgroundColor: '#b1d5f8ff',
        height: 'auto',
        borderRadius: 5
    }
})

export default styles;