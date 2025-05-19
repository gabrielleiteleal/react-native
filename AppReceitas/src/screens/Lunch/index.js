import { View, StyleSheet } from "react-native";
import styles  from "../Breakfast/style";
import FlatListLunch from "../../components/FlatListLunch";

export default function Lunch() {

  return (
    <View style={styles.container}>
      <FlatListLunch />
    </View>
  );
}
