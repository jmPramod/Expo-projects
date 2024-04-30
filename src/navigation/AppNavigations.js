import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './../screens/WelcomeScreen';
import RecipeList from '../screens/RecipeList';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import Login from '../screens/Login';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userAction } from '../redux/slice/loginSlice';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

    const handleLogout = async () => {
        dispatch(userAction.logout())
        await AsyncStorage.removeItem("user");

    };
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userList?.user);
    const isAuthenticated = user !== null && typeof user !== 'undefined' && Object.keys(user).length > 0

    const loading = useSelector((state) => state?.usersList?.loading)

    useEffect(() => {
        async function fetchUser() {
            if (!user || Object.keys(user).length === 0) {

                const value = await AsyncStorage.getItem("user");

                if (value) {
                    value && dispatch(userAction.setUser(JSON.parse(value)))

                }
            }

        }

        fetchUser()
    }, [user])
    if (loading) {
        return <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
        </View>
    }
    else {
        return (<NavigationContainer>

            {
                isAuthenticated ?
                    <Stack.Navigator initialRouteName="WelcomeScreen">
                        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false, headerRight: () => <Button onPress={handleLogout} title="Logout" ></Button> }} />
                        <Stack.Screen name="RecipeList" component={RecipeList} options={{
                            headerShown: true, headerRight: () => <Button onPress={handleLogout} title="Logout" >logout</Button>
                        }} />
                        <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} options={{ headerShown: false }} />
                    </Stack.Navigator> :
                    <Stack.Navigator initialRouteName="Login">
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    </Stack.Navigator>
            }
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