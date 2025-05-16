import { View, Text } from "react-native";
import styles from "./style";

export default function Footer() {
    return (
        <View style={{backgroundColor: 'red'}}>
            <View style={styles.container}>
            <Text style={styles.texto}>Home</Text>
            <Text style={styles.texto}>Favoritos</Text>
        </View>
        </View>
        
    )
}