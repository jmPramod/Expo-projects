import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, ImageBackground, Dimensions, TextInput, Button, ScrollView } from 'react-native';
import { Colors } from '../static/Color';

const Login = () => {
    const [screen, setScreen] = useState("Login")
    const { height } = Dimensions.get("window")
    return (

        <SafeAreaView>
            <ScrollView>
                <View>
                    <ImageBackground style={{ height: height / 2 }} resizeMode='contain' source={require("../../assets/images/login.png")} />
                    {
                        screen === "Login" && <View style={{ paddingHorizontal: "10%", paddingTop: 4, }}>
                            <Text
                                style={{ fontSize: 30, color: Colors.blue, textAlign: "center" }}

                            >Welcome Back</Text>
                            <Text style={{ textAlign: "justify", width: "100%", marginTop: 10 }}>Dont have an account yet? <Text style={{ textDecorationLine: 'underline' }} onPress={() => setScreen("Register")}>Click Here</Text></Text>
                            <TextInput
                                placeholder='Email'
                                placeholderTextColor={Colors.dark}
                                style={{
                                    height: 44,
                                    borderWidth: 1,
                                    borderColor: '#ababab',
                                    borderRadius: 8,
                                    padding: 10,
                                    backgroundColor: '#fff',
                                    marginBottom: 10,
                                    marginVertical: 20
                                }}
                            />
                            <TextInput
                                placeholder='Password'
                                placeholderTextColor={Colors.dark}
                                style={{
                                    height: 44,
                                    borderWidth: 1,
                                    borderColor: '#ababab',
                                    borderRadius: 8,
                                    padding: 10,
                                    backgroundColor: '#fff',
                                    // marginBottom: 30,
                                    marginVertical: 0
                                }}
                            />
                            <Text style={{ textDecorationLine: 'underline', marginBottom: 30, marginTop: 10 }} onPress={() => setScreen("ForgotPassword")}>Forgot Password ? </Text>
                            <Button title='Login' style={{ borderRadius: 50 }}></Button>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 7 }}>

                            </View>
                        </View>
                    }

                    {
                        screen === "Register" && <View style={{ paddingHorizontal: "10%", paddingTop: 4, }}>
                            <Text
                                style={{ fontSize: 30, color: Colors.blue, textAlign: "center" }}

                            >Register</Text>
                            <Text style={{ textAlign: "justify", width: "100%", marginTop: 10 }}>Already have an account? <Text style={{ textDecorationLine: 'underline' }} onPress={() => setScreen("Login")}>Login</Text></Text>
                            <TextInput
                                placeholder='First Name'
                                placeholderTextColor={Colors.dark}
                                style={{
                                    height: 44,
                                    borderWidth: 1,
                                    borderColor: '#ababab',
                                    borderRadius: 8,
                                    padding: 10,
                                    backgroundColor: '#fff',
                                    marginBottom: 10,
                                    marginVertical: 20
                                }}
                            />
                            <TextInput
                                placeholder='Last Name '
                                placeholderTextColor={Colors.dark}
                                style={{
                                    height: 44,
                                    borderWidth: 1,
                                    borderColor: '#ababab',
                                    borderRadius: 8,
                                    padding: 10,
                                    backgroundColor: '#fff',
                                    marginBottom: 10,
                                    marginVertical: 0
                                }}
                            />
                            <TextInput
                                placeholder='Phone'
                                placeholderTextColor={Colors.dark}
                                style={{
                                    height: 44,
                                    borderWidth: 1,
                                    borderColor: '#ababab',
                                    borderRadius: 8,
                                    padding: 10,
                                    backgroundColor: '#fff',
                                    marginBottom: 10,
                                    marginVertical: 0
                                }}
                            />
                            <TextInput
                                placeholder='Email'
                                placeholderTextColor={Colors.dark}
                                style={{
                                    height: 44,
                                    borderWidth: 1,
                                    borderColor: '#ababab',
                                    borderRadius: 8,
                                    padding: 10,
                                    backgroundColor: '#fff',
                                    marginBottom: 10,
                                    marginVertical: 0
                                }}
                            />
                            <TextInput
                                placeholder='Password'
                                placeholderTextColor={Colors.dark}
                                style={{
                                    height: 44,
                                    borderWidth: 1,
                                    borderColor: '#ababab',
                                    borderRadius: 8,
                                    padding: 10,
                                    backgroundColor: '#fff',
                                    marginBottom: 10,
                                    marginVertical: 0
                                }}
                            />
                            <TextInput
                                placeholder='Re-enter Password'
                                placeholderTextColor={Colors.dark}
                                style={{
                                    height: 44,
                                    borderWidth: 1,
                                    borderColor: '#ababab',
                                    borderRadius: 8,
                                    padding: 10,
                                    backgroundColor: '#fff',
                                    marginBottom: 10,
                                    marginVertical: 0
                                }}
                            />
                            <Button title='Register' style={{ borderRadius: 50 }}></Button>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 7 }}>

                            </View>
                        </View>
                    }
                    {
                        screen === "ForgotPassword" && <View style={{ paddingHorizontal: "10%", paddingTop: 4, }}>
                            <Text
                                style={{ fontSize: 26, color: Colors.blue, textAlign: "center" }}

                            >Lets Reset Your Password</Text>
                            <Text style={{ textAlign: "justify", width: "100%", marginTop: 10 }}>Enter your email and we will send you a link to reset
                                your password. </Text>
                            <TextInput
                                placeholder='Email'
                                placeholderTextColor={Colors.dark}
                                style={{
                                    height: 44,
                                    borderWidth: 1,
                                    borderColor: '#ababab',
                                    borderRadius: 8,
                                    padding: 10,
                                    backgroundColor: '#fff',
                                    marginBottom: 10,
                                    marginVertical: 20
                                }}
                            />
                            <Button title='Send' style={{ borderRadius: 50 }}></Button>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 7 }}>

                            </View>
                        </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Login;
