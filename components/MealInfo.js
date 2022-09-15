import { View, Text, StyleSheet } from "react-native";

const MealInfo = ({duration, complexity, affordability, textStyle}) => {

    return (
        <View style={styles.details}>
            <Text style={[styles.detail, textStyle]}>{duration}min</Text>
            <Text style={[styles.detail, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detail, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealInfo;

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: "center"
    },
    detail: {
        marginHorizontal: 3,
        fontSize: 13
    }
})