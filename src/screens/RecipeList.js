import { View, Text, ScrollView, StyleSheet, Button } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CategoryFilter from '../components/CategoryFilter'
import RecipeCard from '../components/RecipeCard'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../redux/slice/loginSlice'

const RecipeList = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state?.userList?.user)

    const handleLogout = () => {
        dispatch(userAction.setUser(response?.data?.data))
    }; return (
        // <ScrollView>


        <View style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }} >
            {/* rendering head */}
            <Header headerText={`Hi ${user?.firstName}`} headerIcon={"bell-o"} />
            {/* rendering category */}

            <View>
                <Text style={styles.categoryTitle}>Category</Text>
                <CategoryFilter />
            </View>
            {/* <Button
                onPress={handleLogout}
                title="Logout"
            /> */}
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