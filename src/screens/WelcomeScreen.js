import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const WelcomeScreen = ({ navigation }) => {
    return (
        <ScrollView>

            <View style={styles.outerContainer}>
                <Image style={styles.ImgContainer} source={require("../../assets/images/welcome1.png")} />
                <View style={styles.textContainer}>


                    <Text style={styles.textStyle}>Deliciaus Recipe!!</Text>
                    <Text style={styles.textStyleSecond} >Cook Like a Chef</Text>
                    <TouchableOpacity style={styles.touchBg} onPress={() => navigation.navigate("RecipeList")}>
                        <Text style={styles.textButton}>Lets go</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        alignItems: "center",
        width: "100%"
    },
    textStyle: {
        color: "red",
        fontSize: 22,
        width: "100%",
        // borderWidth: StyleSheet.hairlineWidth,
        marginTop: 10,
        marginBottom: 10,
        padding: 2,
        textAlign: "center"
    },
    textContainer: {
        width: "80%",

    },
    ImgContainer: {
        flex: 1,
        width: 300,
        height: 400
    },
    textStyleSecond: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10

    },
    touchBg: {
        backgroundColor: "#f96163",
        color: "white",
        paddingVertical: 15,
        marginBottom: 10,
        alignItems: "center",
        borderRadius: 20

    },
    textButton: {
        color: "white",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 15


    }
})