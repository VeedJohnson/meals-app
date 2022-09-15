import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState, useEffect, useLayoutEffect } from "react";

import MealItem from "../components/MealItem";

const MealsOverview = ({route, navigation}) => {
    // console.log(route.params);
    const catId = route.params.categoryId;

    const meals = MEALS.filter(meal => {
        return meal.categoryIds.includes(catId);
    })

    function openMeal(mealId) {
        navigation.navigate('MealDetail', {
            mealId: mealId
        })
    }

    
   function renderMeals({item}) {
    const mealProps = {
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        duration: item.duration,
        complexity: item.complexity,
        affordability: item.affordability
    }
    return <MealItem {...mealProps} showMeal={openMeal.bind(this, item.id)}/> 
   }

   useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => catId === category.id).title;

    navigation.setOptions({
        title: categoryTitle
    });
   }, [])

    return (
            <View>
                <Text>Meal Overview - {catId}</Text>
                {/* { 
                    meals.map(meal => <Text key={meal.id}>{meal.title}</Text>)
                } */}
                <FlatList 
                    data={meals}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMeals}
                />
            </View>
    )
}

export default MealsOverview;