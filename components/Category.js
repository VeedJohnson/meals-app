import { View, StyleSheet, Text, Pressable, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Category = ({title, color, onPress}) => {
    // const navigation = useNavigation();
    return (
        <View style={styles.categoryCtn}>
            <Pressable 
                style={({pressed}) =>  pressed ? [styles.button,  styles.buttonPressed] : styles.button}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Category;

const styles = StyleSheet.create({
    categoryCtn: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 12,
        shadowColor: "black",
        shadowOffset: {width: 4, height: 2},
        shadowRadius: 3,
        shadowOpacity: .5,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.8
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
    },

    title: {
        fontWeight: "700",
        fontSize: 16
    }
})