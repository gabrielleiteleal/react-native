import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Categories from './src/components/Categories';
import ListBreakfast from './src/components/ListBreakfast';
import ListLunch from './src/components/ListLunch';
import ListDinner from './src/components/ListDinner';
import Footer from './src/components/Footer';

function HomeBreakfast() {
  return (
    <View style={{flex: 1, backgroundColor: '#c6c6c6'}}>
      <Header />
      <Categories />
      <ListBreakfast />
      <Footer />
    </View>
  );
}

function HomeLunch() {
  return (
    <View style={{flex: 1, backgroundColor: '#c6c6c6'}}>
      <Header />
      <Categories />
      <ListLunch />
      <Footer />
    </View>
  );
}

function HomeDinner() {
  return (
    <View style={{flex: 1, backgroundColor: '#c6c6c6'}}>
      <Header />
      <Categories />
      <ListDinner />
      <Footer />
    </View>
  );
}

const RootSatck = createNativeStackNavigator({
  screenOptions: {
    headerShown: false
  },
  screens: {
    Home: HomeBreakfast,
    Lunch: HomeLunch,
    Dinner: HomeDinner
  },
})

const Navigation = createStaticNavigation(RootSatck)

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: HomeBreakfast,
    Dinner: HomeDinner,
  },
})

export default function App() {
  return (
    <Navigation />
  )
}