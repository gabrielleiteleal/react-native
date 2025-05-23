import { createNativeStackNavigator } from "@react-navigation/native-stack"
import RecipeBreakfast from "../screens/RecipeBreakfast"
import Favorites from "../screens/Favorites"

const Stack = createNativeStackNavigator()

export default function StackRoutesFav() {
    return (
        <Stack.Navigator initialRouteName="Favoritos">
            <Stack.Screen name="Favoritos" component={Favorites} />
            <Stack.Screen name="Receita" component={RecipeBreakfast} />
        </Stack.Navigator>
    )
}