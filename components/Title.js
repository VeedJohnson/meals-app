import { Text, StyleSheet } from "react-native";

const Title = ({children}) => {

    return <Text style={styles.textCtn}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    textCtn: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        margin: 8
    }
})

