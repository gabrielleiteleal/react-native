import { View, Text, StyleSheet } from "react-native";
import ListFavorites from "../../components/ListFavorites";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <ListFavorites />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6c6c6',
    justifyContent: 'center',
    alignItems: 'center',
  }
})