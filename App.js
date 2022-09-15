import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from "@expo/vector-icons";

import Categories from './screens/Categories';
import Favorites from './screens/Favorites';
import MealsOverview from './screens/MealsOverview';
import MealDetail from './screens/MealDetail';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const navConfig = {
//   headerStyle: { backgroundColor: "black"},
//   headerTintColor: "white",
//   contentStyle: {backgroundColor: "#24180f"}
// }

function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "black"},
        headerTintColor: "white",
        sceneContainerStyle: {backgroundColor: "#24180f"},
        drawerStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "pink",
        drawerActiveBackgroundColor: "#3f2f25"
      }}
    >
      <Drawer.Screen name="MealsCategories" component={Categories} 
        options={{ 
          title: 'Meal Categories', 
          // ...navConfig
          drawerIcon: ({color, size}) => <Ionicons name="fast-food" color={color} size={size} />
        }}
      />
      <Drawer.Screen name="Favorites" component={Favorites}
        options={{ 
          title: 'My Favorites', 
          // ...navConfig
          drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size} />
        }}
      />

    </Drawer.Navigator>
  )
}



export default function App() {
  return (
      <>
        {/* <SafeAreaView style={{flex: 1}}> */}
          <NavigationContainer>
            <Stack.Navigator initialRouteName='MealsCategories'
              screenOptions={{
                headerStyle: { backgroundColor: "black"},
                headerTintColor: "white",
                contentStyle: {backgroundColor: "#24180f"},
                headerBackTitle: 'Back',
              }}
            >
              <Stack.Screen name="Drawer" component={DrawerNav}
                options={{headerShown: false}}
              />
              <Stack.Screen name="MealsOverview" component={MealsOverview}
                options={{ 
                  // headerBackTitle: 'Back',
                }}
              />
              <Stack.Screen name="MealDetail" component={MealDetail}
              options={{ 
               
              }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        {/* </SafeAreaView> */}
        <StatusBar style="auto" />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});



//using Stack Navigation only
// export default function App() {
//   return (
//       <>
//         {/* <SafeAreaView style={{flex: 1}}> */}
//           <NavigationContainer>
//             <Stack.Navigator initialRouteName='MealsCategories'
//               screenOptions={{
//                 headerStyle: { backgroundColor: "black"},
//                 headerTintColor: "white",
//                 contentStyle: {backgroundColor: "#24180f"}
//               }}
//             >
//               <Stack.Screen name="MealsCategories" component={Categories}
//                 options={{ 
//                   title: 'Meal Categories', 
//                   // ...navConfig
//                 }}
//               />
//               <Stack.Screen name="MealsOverview" component={MealsOverview}
//                 options={{ 
//                   // title: 'Meals', //title now derived from the route params and category title in the mealoverview component
//                   headerBackTitle: 'Back',
//                   // ...navConfig 
//                 }}
//               />
//               <Stack.Screen name="MealDetail" component={MealDetail}
//               options={{ 
//                 headerBackTitle: 'Back',
//                 // headerRight: () => {
//                 //   return <Text style={{color: "white"}}>H</Text>
//                 // } **use this method if you are setting header content that will not have interaction with the component
//                 // ...navConfig 
//               }}
//               />
//             </Stack.Navigator>
//           </NavigationContainer>
//         {/* </SafeAreaView> */}
//         <StatusBar style="auto" />
//       </>
//   );
// }