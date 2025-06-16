import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screens/HomeScreen';
import AddSubscriptionScreen from '../screens/AddSubscriptionScreen';
import SubscriptionListScreen from '../screens/SubscriptionListScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
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
          options={({ route }) => ({ 
            title: route.params?.subscription ? 'Editar Assinatura' : 'Adicionar Assinatura' 
          })}
        />
        <Stack.Screen 
          name="SubscriptionList" 
          component={SubscriptionListScreen}
          options={{ title: 'Todas as Assinaturas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;