import { Text, FlatList, View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

import Category from "../components/Category";
import Title from "../components/Title";


const Categories = ({navigation}) => {
    function openCategory(catId) {
        navigation.navigate('MealsOverview', {
            categoryId: catId
        });
    }
    return(
        <View style={styles.container}>
            {/* <Title>Meal categories</Title> */}

            <View style={styles.mealsContainer}>
                <FlatList 
                    data={CATEGORIES}
                    renderItem={
                        ({item}) => <Category title={item.title} color={item.color} onPress={openCategory.bind(this, item.id)}/>
                    }
                    keyExtractor={ item => item.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                />
            </View>
        </View>
    )
}

export default Categories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    mealsContainer: {
        flex: 1,
        marginVertical: 20
    }
})