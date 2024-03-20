import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../static/Color';

const CategoryFilter = () => {
    let category = [{ id: 1, category: "Breakfast" },
    { id: 2, category: "Lunch" },
    { id: 3, category: "Dinner" },
    { id: 4, category: "Veg" },
    { id: 5, category: "Non-veg" }]
    return (
        <View>
            <ScrollView horizontal>
                {category.map((val, id) => {

                    return <TouchableOpacity key={id}>
                        <View style={styles.menuContainer}>
                            <Text style={styles.menu}>{val.category}</Text>
                        </View>
                    </TouchableOpacity>
                })}
            </ScrollView >

        </View >
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        // flexDirection: "row",

    },
    menu: {
        borderWidth: StyleSheet.hairlineWidth,
        padding: 5,
        margin: 5,
        borderRadius: 5,
        fontSize: 20,
        backgroundColor: Colors.primary,
        color: "white",
        shadowColor: "#000",
        marginVertical: 15,
        shadowOffset: { width: 0, height: 4 },
        borderColor: "white"

    }
})

export default CategoryFilter;
