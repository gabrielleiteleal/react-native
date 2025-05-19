import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'purple',
        width: '100%',
        height: 'auto',
        marginBottom: 10,
        gap: 5,
        justifyContent: 'center',
    },
    containerImg: {
        backgroundColor: 'red',
        width: '100',
        height: '100',
    },
    containerText: {
        width: '72%',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 20,
        width: '100%',
        height: 'auto',
        backgroundColor: 'white'
    },
    description: {
        fontSize: 15,
        backgroundColor: 'gray',
        height: 'auto'
    }
})

export default styles;