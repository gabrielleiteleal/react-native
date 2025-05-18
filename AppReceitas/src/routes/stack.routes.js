import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Breakfast from "../screens/Breakfast"
import Lunch from "../screens/Lunch"
import Dinner from "../screens/Dinner"

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="Breakfast">
            <Stack.Screen name="Breakfast" component={Breakfast} />
            <Stack.Screen name="Lunch" component={Lunch} />
            <Stack.Screen name="Dinner" component={Dinner} />
        </Stack.Navigator>
    )
}