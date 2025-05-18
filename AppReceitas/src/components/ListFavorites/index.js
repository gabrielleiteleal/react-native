import { View, ScrollView, Text } from "react-native";
import styles from "../ListBreakfast/style";

export default function ListFavorites() {
    return (

        <ScrollView style={styles.container}>
            <View style={styles.containerList}><Text>FAVORITOS</Text></View>
            <View style={styles.containerList}><Text>FAVORITOS</Text></View>
            <View style={styles.containerList}><Text>FAVORITOS</Text></View>
            <View style={styles.containerList}><Text>FAVORITOS</Text></View>
        </ScrollView>

    )
}