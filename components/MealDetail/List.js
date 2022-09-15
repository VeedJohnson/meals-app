import { StyleSheet, ScrollView, Text, View } from "react-native";

const List = ({data}) => {
    return (
        <View>
        {
            data.map((dataPoint, index) => (
                <View key={index} style={styles.listItem}>
                    <Text style={styles.itemText}>{dataPoint}</Text>
                </View>
            ))
        }
        </View>
    )
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#f5d2bc",
    },
    itemText: {
        color: "#24180f",
        textAlign: "center",
        padding: 3
    }
})