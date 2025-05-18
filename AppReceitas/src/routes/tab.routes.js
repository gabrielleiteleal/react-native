import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Breakfast from "../screens/Breakfast";
import Favorites from "../screens/Favorites";
import StackRoutes from "./stack.routes";

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={StackRoutes}
                options={{
                    tabBarIcon: () => <Feather name="home" size={30} />,
                    tabBarLabel: 'Home',
                    tabBarActiveBackgroundColor: 'gray',
                    tabBarInactiveBackgroundColor: 'white',
                    headerShown: false
                }} />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: () => <Feather name="heart" size={30} />,
                    tabBarLabel: 'Favorites',
                    tabBarActiveBackgroundColor: 'gray',
                    tabBarInactiveBackgroundColor: 'white'
                }} />
        </Tab.Navigator>
    )
}