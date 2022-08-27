import DirectoryScreen from "./DirectoryScreen";

import CampsitesInfoScreen from "./CampsitesInfoScreen";
import { Platform, View, Text } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#5637DD" },
};
const HomeNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
};
const DirectoryNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Directory" screenOptions={screenOptions}>
      <Stack.Screen
        name="Directory"
        component={DirectoryScreen}
        options={{ title: "Directory" }}
      ></Stack.Screen>
      <Stack.Screen
        name="CampsiteInfo"
        component={CampsitesInfoScreen}
        options={({ route }) => ({
          title: route.params.campsite.name,
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS == "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <DirectoryNavigator />
    </View>
  );
};

export default Main;
