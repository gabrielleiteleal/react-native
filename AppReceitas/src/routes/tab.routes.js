import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

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
                    tabBarActiveBackgroundColor: '#9eb4e0',
                    tabBarInactiveBackgroundColor: 'white',
                    headerShown: false
                }} />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: () => <Feather name="heart" size={30} />,
                    tabBarActiveBackgroundColor: '#9eb4e0',
                    tabBarInactiveBackgroundColor: 'white'
                }} />
        </Tab.Navigator>
    )
}