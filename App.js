// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import AddSubscriptionScreen from './src/screens/AddSubscriptionScreen';
import SubscriptionListScreen from './src/screens/SubscriptionListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Resumo de Assinaturas' }} 
        />
        <Stack.Screen 
          name="AddSubscription" 
          component={AddSubscriptionScreen} 
          options={{ title: 'Adicionar Assinatura' }}
        />
        <Stack.Screen 
          name="SubscriptionList" 
          component={SubscriptionListScreen}
          options={{ title: 'Todas as Assinaturas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}