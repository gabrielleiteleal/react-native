import { View } from "react-native";

import styles from "../Breakfast/style"
import FlatListDinner from "../../components/FlatListDinner";

export default function Dinner() {
  return (
    <View style={styles.container}>
      <FlatListDinner />
    </View>
  );
}
