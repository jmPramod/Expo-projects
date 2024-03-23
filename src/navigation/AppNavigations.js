import React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './../screens/WelcomeScreen';
import RecipeList from '../screens/RecipeList';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
    // const Stack = createNative
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RecipeList" component={RecipeList} options={{ headerShown: false }} />
                <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>)
}

const styles = StyleSheet.create({})

export default AppNavigation;
0