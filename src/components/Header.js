import React from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const Header = ({ headerText }) => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.firstPart}>
                <Text style={styles.name}>{headerText}</Text>

                <TouchableOpacity><FontAwesome5 name="user" size={24} color="black" /></TouchableOpacity>

            </View>
            <View style={styles.secondPart}>


                <TextInput
                    autoCapitalize='none'
                    placeholder='🔍 Search..... '

                    style={[styles.inputField]}
                />
                {/* <TouchableOpacity
                    style={styles.touchBg}
                //  onPress={() => navigation.navigate("RecipeList")}
                >
                    <Text>

                        <AntDesign name="search1" size={24} color="black" />
                    </Text>
                </TouchableOpacity> */}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        // flexDirection: "row",
        marginTop: 30,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    inputField: {

        alignItems: "center",
        justifyContent: "center",
        height: 44,
        borderWidth: 1,
        borderColor: "#ababab",
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#fff",

        // margin: "auto",
        width: "100%"
    },
    name: { fontSize: 25 },

    touchBg: {
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        // width: "10%"
    },
    firstPart: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    secondPart: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,

    }
})

export default Header;
