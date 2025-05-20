import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";

export default function RecipeBreakfast() {

  const route = useRoute()
  const { item } = route.params

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerDescription}>
        <View style={styles.containerImg}>
          <Image source={{ uri: item.imagem}} style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 10}} />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.title}>{item.titulo}</Text>
          <Text style={styles.description}>{item.descricao}</Text>
        </View>
        <TouchableOpacity style={styles.favIcon}><Feather name="heart" size={45} /></TouchableOpacity>
      </View>
      <ScrollView style={styles.containerRecipe}>
        {item.passo_a_passo.map((passo, index) => (
          <Text key={index} style={styles.textRecipe}>• {passo}</Text>
        ))}
      </ScrollView> 
    </View>
  );
}