import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, ImageBackground, Dimensions, TextInput, Button, ScrollView, Alert } from 'react-native';
import { Colors } from '../static/Color';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from '../redux/slice/loginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { config } from 'dotenv';
// config();
const Login = () => {
    const [screen, setScreen] = useState("Login")
    const dispatch = useDispatch()
    const products = useSelector((state) => state.userList)

    const { height } = Dimensions.get("window")
    const loginInitialValues = {
        email: '',
        password: ''
    };
    const validationLoginSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is Required'),

    });
    const handleLoginSubmit = async (values) => {

        try {
            dispatch(userAction.setLoading(true))
            const response = await axios.post("https://nodejs-api-eta-mocha.vercel.app/auth/login", values)
            dispatch(userAction.setUser(response.data.data))
            console.log(response.data);
        }
        catch (err) {
            if (err.response.data) {
                Alert.alert(
                    'Login Error',
                    `${err.response.data.message}`,
                    [{ text: 'OK', }],
                    { cancelable: false }
                )
            }
            dispatch(userAction.setLoading(false))

        }

    }
    const registerInitialValues = {
        firstName: '',
        lastName: '',
        email: "",
        password: "",
        confirmPassword: ''
    };
    const validationRegisterSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleRegisterSubmit = (values) => {
        console.log(values);
    }
    const forgotPasswordInitialValues = {
        email: "",
    };
    const validationForgotPasswordSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Reset Email is Required'),
    });

    const handleForgotPasswordSubmit = (values) => {
        console.log(values);
    }
    useEffect(() => {

        console.log("products", products);
        let a = async () => {
            const value = await AsyncStorage.getItem("user");

            console.log("value", value);
        }

        a()

    }, [products])
    return (

        <SafeAreaView>
            <ScrollView>
                <View>
                    <ImageBackground style={{ height: height / 2 }} resizeMode='contain' source={require("../../assets/images/login.png")} />
                    {
                        screen === "Login" &&
                        <Formik
                            initialValues={loginInitialValues}
                            validationSchema={validationLoginSchema}
                            onSubmit={handleLoginSubmit}
                        >

                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (<View style={{ paddingHorizontal: "10%", paddingTop: 4, }}>
                                <Text
                                    style={{ fontSize: 30, color: Colors.blue, textAlign: "center" }}

                                >Welcome Back</Text>

                                <Text style={{ textAlign: "justify", width: "100%", marginTop: 10 }}>Dont have an account yet? <Text style={{ textDecorationLine: 'underline' }} onPress={() => setScreen("Register")}>Click Here</Text></Text>
                                <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="Email"
                                    keyboardType="email-address"

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
                                {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

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
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry
                                />
                                {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

                                <Text style={{ textDecorationLine: 'underline', marginBottom: 30, marginTop: 10 }} onPress={() => setScreen("ForgotPassword")}>Forgot Password ? </Text>
                                <Button title='Login' style={{ borderRadius: 50 }} onPress={handleSubmit}></Button>

                            </View>
                            )}
                        </Formik>
                    }

                    {
                        screen === "Register" &&
                        <Formik
                            initialValues={registerInitialValues}
                            validationSchema={validationRegisterSchema}
                            onSubmit={handleRegisterSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (<View style={{ paddingHorizontal: "10%", paddingTop: 4, paddingBottom: 14, }}>
                                <Text
                                    style={{ fontSize: 30, color: Colors.blue, textAlign: "center" }}

                                >Register</Text>
                                <Text style={{ textAlign: "justify", width: "100%", marginTop: 10 }}>Already have an account? <Text style={{ textDecorationLine: 'underline' }} onPress={() => setScreen("Login")}>Login</Text></Text>
                                <TextInput
                                    placeholder='First Name'
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}

                                    placeholderTextColor={Colors.dark}
                                    style={{
                                        height: 44,
                                        borderWidth: 1,
                                        borderColor: '#ababab',
                                        borderRadius: 8,
                                        padding: 10,
                                        backgroundColor: '#fff',
                                        // marginBottom: 10,
                                        marginVertical: 5
                                    }}
                                />
                                {touched.firstName && errors.firstName && <Text style={styles.error}>{errors.firstName}</Text>}

                                <TextInput
                                    placeholder='Last Name '
                                    onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('lastName')}
                                    value={values.lastName}

                                    placeholderTextColor={Colors.dark}
                                    style={{
                                        height: 44,
                                        borderWidth: 1,
                                        borderColor: '#ababab',
                                        borderRadius: 8,
                                        padding: 10,
                                        backgroundColor: '#fff',
                                        // marginBottom: 10,
                                        marginVertical: 5
                                    }}
                                />
                                {touched.lastName && errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}


                                <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="Email"
                                    keyboardType="email-address"

                                    placeholderTextColor={Colors.dark}
                                    style={{
                                        height: 44,
                                        borderWidth: 1,
                                        borderColor: '#ababab',
                                        borderRadius: 8,
                                        padding: 10,
                                        backgroundColor: '#fff',
                                        // marginBottom: 10,
                                        marginVertical: 5
                                    }}
                                />
                                {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

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
                                        // marginBottom: 10,
                                        marginVertical: 5
                                    }}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry
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
                                        marginVertical: 5
                                    }}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword}
                                    secureTextEntry


                                />
                                {touched.confirmPassword && errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}

                                <Button title='Register' style={{ borderRadius: 50, marginVertical: 10, marginTop: 5 }} onPress={handleSubmit}></Button>

                            </View>)}

                        </Formik>

                    }
                    {
                        screen === "ForgotPassword" &&
                        <Formik
                            initialValues={forgotPasswordInitialValues}
                            validationSchema={validationForgotPasswordSchema}
                            onSubmit={handleForgotPasswordSubmit}
                        >

                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (<View style={{ paddingHorizontal: "10%", paddingTop: 4, }}>
                                <Text
                                    style={{ fontSize: 26, color: Colors.blue, textAlign: "center" }}

                                >Lets Reset Your Password</Text>
                                <Text style={{ textAlign: "justify", width: "100%", marginTop: 10 }}>Enter your email and we will send you a link to reset
                                    your password. </Text>
                                <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="Email"
                                    keyboardType="email-address"

                                    placeholderTextColor={Colors.dark}
                                    style={{
                                        height: 44,
                                        borderWidth: 1,
                                        borderColor: '#ababab',
                                        borderRadius: 8,
                                        padding: 10,
                                        backgroundColor: '#fff',
                                        // marginBottom: 10,
                                        marginVertical: 5
                                    }}
                                />
                                {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

                                <Button title='Send' style={{ borderRadius: 50 }} onPress={handleSubmit}></Button>
                                <Text style={{ textDecorationLine: 'underline', marginBottom: 30, marginTop: 10 }} onPress={() => setScreen("Login")}>Go back to LOGIN? </Text>

                            </View>)}
                        </Formik>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    error: {
        color: "red"
    }

})

export default Login;
