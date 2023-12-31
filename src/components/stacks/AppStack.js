import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/indexScreen.js";
import ShowDetailsScreen from "../screens/ShowDetailsScreen.js";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{
            title: "Movie App",
            headerStyle: {
              backgroundColor: "#2c3e50",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        ></Stack.Screen>
        <Stack.Screen name="show" component={ShowDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

{/* <Stack.Screen name="Details" component={SingleItemScreen} /> */}

export default AppStack;