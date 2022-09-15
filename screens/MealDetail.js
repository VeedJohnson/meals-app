import { useLayoutEffect } from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealInfo from "../components/MealInfo";
import Title from "../components/Title";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetail = ({route, navigation}) => {
    const mealId = route.params.mealId;
    
    const meal = MEALS.find(meal => meal.id === mealId);
    
    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title,
            headerRight: () => {
                return <IconButton icon="star" color="white" />
              }
        })
    }, [navigation, meal])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: meal.imageUrl}} style={styles.image}/>
            <Title>{meal.title}</Title>
            <MealInfo
                duration={meal.duration}
                affordability={meal.affordability}
                complexity={meal.complexity}
                textStyle={styles.detailText}
            />
            <View style={styles.listContainer}>
                <Text style={styles.subtitle}>Ingredients</Text>
                <List data={meal.ingredients}/>
            </View>
            <View style={styles.listContainer}>
                <Text style={styles.subtitle}>Steps</Text>
                <List data={meal.steps}/>
            </View>
        </ScrollView>
    )
}

export default MealDetail;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 30
    },
    image: {
        width: "100%",
        height: 300
    },
    detailText: {
        color: "white"
    },
    subtitle: {
        color: "#f5d2bc",
        fontSize: 18,
        fontWeight: "bold",
        margin: 12,
        textAlign: "center",
    },
    listContainer: {
        width: "80%",
        alignSelf: "center"
    }
})