import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { MaterialIcons, Entypo, Ionicons, AntDesign, Foundation } from '@expo/vector-icons';

import { Home } from '../Screens/Home';
import { Manutencao } from "../Screens/Manutencao";

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
        }} name="Explore" component={Manutencao} />

        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircleo" size={30} color="white" />
          )
        }} name="NovaPublicacao" component={Manutencao} />

        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="play-video" size={30} color="white" />
          )
        }} name="Reels" component={Manutencao} />

        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person-circle-outline" size={30} color="white" />
          )
        }} name="Perfil" component={Manutencao} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};