import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen'; 
import HomeScreen from '../Screens/HomeScreen'; 
import RegisterScreen from '../Screens/RegisterScreen';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();

// Cabros, aquí se va agregando las screens que vayan creando, o cualquier cosa me dicen
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: true }} 
        />
        <Stack.Screen name="RegisterScreen" 
          component={RegisterScreen} 
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#3B53F7" />
              </TouchableOpacity>
            ),
            headerTitle: '', // No mostrar título
            headerShadowVisible: false,
            headerStyle: { backgroundColor: '#f8f7ff' }, 
          })} 
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
