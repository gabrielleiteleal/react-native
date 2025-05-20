import { View, FlatList, Text, Image, TouchableOpacity } from "react-native"
import dados from "../../data/dinner.json"
import styles from "../FlatListBreakfast/style"
import { useNavigation } from "@react-navigation/native"

const FlatListDinner = () => {

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, backgroundColor: '#c6c6c6', }}>
            <FlatList
                data={dados}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Receita', { item })} style={styles.container}>
                        <View style={styles.containerImg}>
                            <Image source={{ uri: item.imagem }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 10 }}></Image>
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.title}>{item.titulo}</Text>
                            <Text style={styles.description}>{item.descricao}</Text>
                        </View>
                    </TouchableOpacity>
                )} />
        </View>
    )
}

export default FlatListDinner;