import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Breakfast from "../screens/Breakfast"
import Lunch from "../screens/Lunch"
import Dinner from "../screens/Dinner"
import RecipeBreakfast from "../screens/RecipeBreakfast"

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="Café da manhã">
            <Stack.Screen name="Café da manhã" component={Breakfast} />
            <Stack.Screen name="Almoço" component={Lunch} />
            <Stack.Screen name="Jantar" component={Dinner} />
            <Stack.Screen name="Receita" component={RecipeBreakfast} />
        </Stack.Navigator>
    )
}