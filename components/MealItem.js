import { View, Text , Pressable, Image, StyleSheet, Platform} from 'react-native';
import Meal from '../models/meal';
import MealInfo from './MealInfo';

const MealItem = ({title, imageUrl, duration, complexity, affordability, showMeal}) => {
    return (
        <View style={styles.rootContainer}>
            <Pressable
                android_ripple={{color: "black"}}
                style={({pressed}) => pressed ? styles.buttonPressed : null}
                onPress={showMeal}
            >
                <View style={styles.imgContainer}>
                    <Image source={{ uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                    <MealInfo duration={duration} affordability={affordability} complexity={complexity} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    rootContainer: {
        // flex: 1,
        // alignItems: 'center',
        // width: '100%'
        margin: 20,
        borderRadius: 8,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: {width: 4, height: 2},
        shadowRadius: 3,
        shadowOpacity: .3,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    imgContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 20
    },
    buttonPressed: {
        opacity: 0.8
    },
})
