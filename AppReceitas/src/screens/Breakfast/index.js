import { View, Text } from "react-native";
import Categories from "../../components/Categories";
import FlatListBreakfast from "../../components/FlatListBreakfast";
import styles from "./style"

export default function Breakfast() {


  return (
    <View style={styles.container}>
      <Categories />
      <FlatListBreakfast />
    </View>
  );
}
