import { View, Text } from "react-native";
import styles from "./style";

export default function Header() {
    return (
        <View style={{backgroundColor: 'pink'}}>
            <View style={styles.container}>
            <Text style={styles.texto}>Categorias</Text>
        </View>
        </View>
        
    )
}