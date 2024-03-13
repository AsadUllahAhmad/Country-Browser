import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import CountryDetailScreen from './screens/CountryDetailScreen';
import { auth } from "./config/firebase";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <>
            <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="SignUpScreen" component={SignUpScreen} />
          </>
        ) : (
          <>
          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
          <Stack.Screen options={{ headerShown: false }} name="CountryDetailScreen" component={CountryDetailScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
