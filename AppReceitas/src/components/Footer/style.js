import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 25,
        backgroundColor: 'red',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    button: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'yellow',
    }
}
)

export default styles