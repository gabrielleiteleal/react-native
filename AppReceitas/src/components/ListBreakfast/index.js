import { View, ScrollView, Text } from "react-native";
import styles from "./style";

export default function ListBreakfast() {
    return (

        <ScrollView style={styles.container}>
            <View style={styles.containerList}><Text>CAFÉ DA MANHÃ</Text></View>
            <View style={styles.containerList}><Text>CAFÉ DA MANHÃ</Text></View>
            <View style={styles.containerList}><Text>CAFÉ DA MANHÃ</Text></View>
            <View style={styles.containerList}><Text>CAFÉ DA MANHÃ</Text></View>
            <View style={styles.containerList}><Text>CAFÉ DA MANHÃ</Text></View>
            <View style={styles.containerList}><Text>CAFÉ DA MANHÃ</Text></View>
            <View style={styles.containerList}><Text>CAFÉ DA MANHÃ</Text></View>
            <View style={styles.containerList}><Text>CAFÉ DA MANHÃ</Text></View>
            <View style={styles.containerList}><Text>CAFÉ DA MANHÃ</Text></View>
            <View style={styles.containerList}><Text>CAFÉ DA MANHÃ</Text></View>
            <View style={styles.containerList}><Text>CAFÉ DA MANHÃ</Text></View>
        </ScrollView>

    )
}