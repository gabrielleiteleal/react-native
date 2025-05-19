import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Café da manhã')} style={styles.button}>
                <Text style={{color: 'white'}}>Café da manhã</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Almoço')} style={styles.button}>
                <Text style={{color: 'white'}}>Almoço</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Jantar')} style={styles.button}>
                <Text style={{color: 'white'}}>Jantar</Text>
            </TouchableOpacity>
        </View>
    )
}