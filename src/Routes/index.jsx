import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MaterialIcons, Entypo, Ionicons, AntDesign, Foundation } from '@expo/vector-icons';

import { Home } from '../Screens/Home';
import { Manutencao } from '../Screens/Manutencao';
import { Mensagem } from '../Screens/Mensagem';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#000',
      },
      tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color }) => <MaterialIcons name="house" size={30} color="white" />,
      }}
    />
    <Tab.Screen
      name="Explore"
      component={Manutencao}
      options={{
        tabBarIcon: ({ color }) => <Entypo name="magnifying-glass" size={24} color="white" />,
      }}
    />
    <Tab.Screen
      name="NovaPublicacao"
      component={Manutencao}
      options={{
        tabBarIcon: ({ color }) => <AntDesign name="pluscircleo" size={30} color="white" />,
      }}
    />
    <Tab.Screen
      name="Reels"
      component={Manutencao}
      options={{
        tabBarIcon: ({ color }) => <Foundation name="play-video" size={30} color="white" />,
      }}
    />
    <Tab.Screen
      name="Perfil"
      component={Manutencao}
      options={{
        tabBarIcon: ({ color }) => <Ionicons name="md-person-circle-outline" size={30} color="white" />,
      }}
    />
  </Tab.Navigator>
);

export const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Mensagem"
        component={Mensagem}
        options={{ title: 'Mensagem' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
