import { View, ScrollView, Text } from "react-native";
import styles from "./style";

export default function ListLunch() {
    return (

        <ScrollView style={styles.container}>
            <View style={styles.containerList}><Text>ALMOÇO</Text></View>
            <View style={styles.containerList}><Text>ALMOÇO</Text></View>
            <View style={styles.containerList}><Text>ALMOÇO</Text></View>
            <View style={styles.containerList}><Text>ALMOÇO</Text></View>
            <View style={styles.containerList}><Text>ALMOÇO</Text></View>
            <View style={styles.containerList}><Text>ALMOÇO</Text></View>
            <View style={styles.containerList}><Text>ALMOÇO</Text></View>
            <View style={styles.containerList}><Text>ALMOÇO</Text></View>
            <View style={styles.containerList}><Text>ALMOÇO</Text></View>
            <View style={styles.containerList}><Text>ALMOÇO</Text></View>
            <View style={styles.containerList}><Text>ALMOÇO</Text></View>
        </ScrollView>

    )
}