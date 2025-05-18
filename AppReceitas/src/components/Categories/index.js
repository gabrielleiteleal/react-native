import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Breakfast')} style={styles.button}>
                <Text>Café da manhã</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Lunch')} style={styles.button}>
                <Text>Almoço</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Dinner')} style={styles.button}>
                <Text>Jantar</Text>
            </TouchableOpacity>
        </View>
    )
}