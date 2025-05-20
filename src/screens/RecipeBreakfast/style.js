import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerRecipe: {
        flex: 1,
        backgroundColor: '#fad6c2',
        padding: 15,
    },
    containerDescription: {
        width: '100%',
        height: 210,
        flexDirection: 'row',
        backgroundColor: '#4073c1',
        gap: 8,
        justifyContent: 'center',
        paddingVertical: 45,
        paddingHorizontal: 50,
    },
    favIcon: {
        position: 'absolute',
        top: 2.5,
        right: 30,
        width: 45,
        height: 45,

    },
    containerImg: {
        width: '150',
        height: '150',
        padding: 5,
        backgroundColor: 'black',
        borderRadius: 15,
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
        backgroundColor: '#d6e3f0',
        borderRadius: 4
    },
    description: {
        fontSize: 15,
        backgroundColor: '#d6e3f0',
        height: 'auto',
        borderRadius: 4
    },
    textRecipe: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 5
    }
})

export default styles