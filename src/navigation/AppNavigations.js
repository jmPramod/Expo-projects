import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './../screens/WelcomeScreen';
import RecipeList from '../screens/RecipeList';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import Login from '../screens/Login';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
    const loading = useSelector((state) => state.userList.loading)
    if (loading) {
        return <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
        </View>
    }
    else {
        return (<NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RecipeList" component={RecipeList} options={{ headerShown: false }} />
                <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
})

export default AppNavigation;
0