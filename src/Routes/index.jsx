import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { MaterialIcons, Entypo, Ionicons, AntDesign } from '@expo/vector-icons';

import { Home } from '../Screens/Home';
import { Explore } from "../Screens/Explore";
import { NovaPublicacao } from "../Screens/NovaPublicacao";
import { Perfil } from "../Screens/Perfil";
import { Mensagem } from "../Screens/Mensagem";
import { Notificacao } from "../Screens/Notificacao";

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
        }} name="Explore" component={Explore} />

        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircleo" size={30} color="white" />
          )
        }} name="NovaPublicacao" component={NovaPublicacao} />

        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={30} color="white" />
          )
        }} name="Mensagem" component={Mensagem} />

        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={24} color="white" />
          )
        }} name="Notificacao" component={Notificacao} />

        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person-circle-outline" size={30} color="white" />
          )
        }} name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};