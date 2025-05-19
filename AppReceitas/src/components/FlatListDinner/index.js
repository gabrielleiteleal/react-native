import { View, FlatList, Text } from "react-native"
import dados from "../../data/dinner.json"
import styles from "../FlatListBreakfast/style"

const FlatListDinner = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#c6c6c6', }}>
            <FlatList
                data={dados}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <View style={styles.containerImg}></View>
                        <View style={styles.containerText}>
                            <Text style={styles.title}>{item.titulo}</Text>
                            <Text style={styles.description}>{item.descricao}</Text>
                        </View>
                    </View>
                )} />
        </View>
    )
}

export default FlatListDinner;