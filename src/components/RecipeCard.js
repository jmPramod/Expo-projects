import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Image, Pressable } from 'react-native';
import { Colors } from '../static/Color';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RecipeCard = () => {
    const [numColumns, setNumColumns] = useState(2); // Initialize numColumns state
    const navigation = useNavigation()

    const recipeList = [{
        id: 0,
        name: "chapathi",
        Image: require("../../assets/images/tuna.png"),
        rating: 1.2,
        ingredient: ["water", "oil", "salt"],
        time: "30 mins",
        difficulty: "Medium",
        calory: "200 cal",
        color: "#f39c12",
        description: "new dish with lot of flaver "

    }, {
        id: 1,
        name: "chapathi1",
        Image: require("../../assets/images/chicken.png"),
        rating: 4,
        ingredient: ["water", "oil", "salt"],
        time: "30 mins",
        difficulty: "Medium",
        calory: "200 cal"
        ,
        color: "#f39c12",
        description: "new dish with lot of flaver "
    }, {
        id: 3,
        name: "chapathi",
        Image: require("../../assets/images/cupcakes.png"),
        rating: 1.2,
        ingredient: ["water", "oil", "salt"],
        time: "30 mins",
        difficulty: "Medium",
        calory: "200 cal"
        ,
        color: "#f39c12",
        description: "new dish with lot of flaver "
    }, {
        id: 4,
        name: "chapathi1",
        Image: require("../../assets/images/tuna.png"),
        rating: 1.2,
        ingredient: ["water", "oil", "salt"],
        time: "30 mins",
        difficulty: "Medium",
        calory: "200 cal"
        ,
        color: "#f39c12",
        description: "new dish with lot of flaver "
    }, {
        id: 5,
        name: "chapathi",
        Image: require("../../assets/images/tuna.png"),
        rating: 1.2,
        ingredient: ["water", "oil", "salt"],
        time: "30 mins",
        difficulty: "Medium",
        calory: "200 cal"
        ,
        color: "#f39c12",
        description: "new dish with lot of flaver "
    }, {
        id: 6,
        name: "chapathi1",
        Image: require("../../assets/images/tuna.png"),
        rating: 1.2,
        ingredient: ["water", "oil", "salt"],
        time: "30 mins",
        difficulty: "Medium",
        calory: "200 cal"
        ,
        color: "#f39c12",
        description: "new dish with lot of flaver "
    }, {
        id: 7,
        name: "chapathi",
        Image: require("../../assets/images/tuna.png"),
        rating: 1.2,
        ingredient: ["water", "oil", "salt"],
        time: "30 mins",
        difficulty: "Medium",
        calory: "200 cal"
        ,
        color: "#f39c12",
        description: "new dish with lot of flaver "
    }, {
        id: 8,
        name: "chapathi1",
        Image: require("../../assets/images/tuna.png"),
        rating: 1.2,
        ingredient: ["water", "oil", "salt"],
        time: "30 mins",
        difficulty: "Medium",
        calory: "200 cal"
        ,
        color: "#f39c12",
        description: "new dish with lot of flaver "
    }, {
        id: 9,
        name: "chapathi",
        Image: require("../../assets/images/tuna.png"),
        rating: 1.2,
        ingredient: ["water", "oil", "salt"],
        time: "30 mins",
        difficulty: "Medium",
        calory: "200 cal"
        ,
        color: "#f39c12",
        description: "new dish with lot of flaver "
    }, {
        id: 10,
        name: "chapathi1",
        Image: require("../../assets/images/tuna.png"),
        rating: 1.2,
        ingredient: ["water", "oil", "salt"],
        time: "30 mins",
        difficulty: "Medium",
        calory: "200 cal"
        ,
        color: "#f39c12",
        description: "new dish with lot of flaver "
    }]
    const renderStar = (item) => {
        if (0 < item.rating < 3) {
            return <MaterialIcons name="star-half" size={24} color="red" />
        }
        else {
            console.log(item.rating);
            return <MaterialIcons name="star-rate" size={24} color="red" />
        }
    }
    return (
        <View>
            <FlatList data={recipeList}
                columnWrapperStyle={{
                    justifyContent: "space-between"
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Pressable onPress={() => navigation.navigate("RecipeDetailScreen", { item: item })} style={styles.renderParent}

                >
                    <Image style={styles.imageStyle} source={item.Image} />
                    <Text>{item.name}
                    </Text>
                    <Text>
                        {item.time} | {item.rating} | {renderStar(item)}</Text>

                </Pressable>}



                numColumns={numColumns}

            />



        </View>
    );
}

const styles = StyleSheet.create({
    renderParent: {
        backgroundColor: Colors.light,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 16,
        marginVertical: 16,
        alignItems: "center",
        padding: 10
    }
    , imageStyle: {
        width: 130,
        height: 130,
        resizeMode: "center"
    }
})

export default RecipeCard;
