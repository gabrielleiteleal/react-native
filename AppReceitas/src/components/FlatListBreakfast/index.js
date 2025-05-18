import { View, FlatList, Text } from "react-native"
import dados from "../../data/breakfast.json"

const FlatListBreakfast = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'orange', }}>
            <FlatList
                data={dados}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.titulo}</Text>
                        <Text>{item.descricao}</Text>
                    </View>
                )} />
        </View>
    )
}

export default FlatListBreakfast;