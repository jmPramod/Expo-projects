import React, { useState } from 'react';
import { View, StyleSheet, Image, SafeAreaView, Pressable, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const RecipeDetailScreen = ({ route, navigation }) => {
    const { item } = route.params
    const [heartIcon, setHeartIcon] = useState("hearto")

    const changeIcon = () => {
        if (heartIcon === "hearto") {
            setHeartIcon("heart")
        }
        else {
            setHeartIcon("hearto")
        }
    }
    return (
        <View style={[styles.outerContainer, { backgroundColor: item.color }]}>
            <SafeAreaView style={styles.safearea} >
                <Pressable onPress={() => navigation.goBack()}>

                    <Ionicons style={styles.icon} name="arrow-back-circle-outline" size={24} color="red" />
                </Pressable>
                <Pressable onPress={() => changeIcon()}>

                    <AntDesign style={styles.icon} name={heartIcon} size={24} color="red" />
                </Pressable>
            </SafeAreaView>

            <ScrollView>
                <View style={styles.innerContainer}>
                    <View style={styles.thirdContainer}>
                        <Image
                            source={item.Image}
                            style={styles.ImgStyle}
                        />
                    </View>
                    {/* dish name */}
                    <Text style={{ marginTop: 100, fontWeight: "bold", fontSize: 30, textAlign: "center" }}>{item.name}</Text>
                    {/* dish description */}
                    <Text style={{ textAlign: "justify" }} >{item.description}</Text>
                    {/* 3 icon */}
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%" }}>

                        <View
                            style={{ backgroundColor: "#a2d4ff", paddingHorizontal: 15, paddingVertical: 15, alignItems: "center", borderRadius: 30, marginHorizontal: 5 }}
                        >

                            <Text style={{ fontSize: 20, flexDirection: "column" }} >{item.time} ⏰</Text>
                        </View>
                        <View
                            style={{ backgroundColor: "pink", paddingHorizontal: 15, paddingVertical: 15, alignItems: "center", borderRadius: 30, marginHorizontal: 5 }}
                        >

                            <Text style={{ fontSize: 20, flexDirection: "column" }}>{item.difficulty}🍛</Text>
                        </View>


                    </View>
                    {/* ingrediance */}
                    <View>
                        <Text style={{ fontSize: 23 }}>
                            Ingrediance:
                        </Text>
                        {item.ingredient.map((val, index) =>
                            <View style={{ flexDirection: "row", alignItems: "center" }} key={index}>
                                <View style={{ backgroundColor: "red", height: 10, width: 10, borderRadius: 80, alignItems: "center", justifyContent: "center" }}></View>
                                <Text style={{ fontSize: 18, marginHorizontal: 3 }}>{val}</Text>
                            </View>)}
                    </View>
                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    outerContainer: { flex: 1, backgroundColor: "#6f4e37", position: "relative" },
    innerContainer: { flex: 1, backgroundColor: "white", marginTop: 240, borderTopLeftRadius: 56, borderTopRightRadius: 56, padding: 20, height: "100%" },
    thirdContainer: {
        width: 300, height: 300, position: "absolute", top: -200, left: "8%", right: "5%", backgroundColor: "none"
    },
    ImgStyle: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    safearea: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginTop: 25,

    },
    icon: {
        fontSize: 30
    }
})

export default RecipeDetailScreen;
