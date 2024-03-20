import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CategoryFilter from '../components/CategoryFilter'
import RecipeCard from '../components/RecipeCard'

const RecipeList = () => {
    return (
        // <ScrollView>


        <View style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }} >
            {/* rendering head */}
            <Header headerText={"Hi Pj"} headerIcon={"bell-o"} />
            {/* rendering category */}

            <View>
                <Text style={styles.categoryTitle}>Category</Text>
                <CategoryFilter />
            </View>
            {/* render Cards */}
            <RecipeCard />
            {/* rendering footer */}

            <Footer />
        </View>
        // </ScrollView>
    )
}

export default RecipeList

const styles = StyleSheet.create({
    categoryTitle: {
        fontWeight: "bold",
        fontSize: 20
    }
})