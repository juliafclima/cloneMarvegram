import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from '../Screens/Home';
import { NavigationContainer } from "@react-navigation/native";

import { MaterialIcons, Entypo, Octicons, Ionicons, AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000',
          },
          tabBarShowLabel: false,
        }}>
        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="house" size={30} color="white" />
            )
        }} name="Home" component={Home} />

        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="magnifying-glass" size={24} color="white" />
          )
        }} name="Home1" component={Home} />

        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircleo" size={30} color="white" />
          )
        }} name="Home3" component={Home} />

        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="video" size={30} color="white" />
          )
        }} name="Home2" component={Home} />

        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person-circle-outline" size={30} color="white" />
          )
        }} name="Home4" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};