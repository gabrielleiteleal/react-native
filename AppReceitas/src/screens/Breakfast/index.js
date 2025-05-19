import { View, Text } from "react-native";
import Categories from "../../components/Categories";
import FlatListBreakfast from "../../components/FlatListBreakfast";
import { useNavigation } from "@react-navigation/native";
import styles from "./style"

export default function Breakfast() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Categories />
      <FlatListBreakfast />
    </View>
  );
}
