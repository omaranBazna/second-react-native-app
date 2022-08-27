import DirectoryScreen from "./DirectoryScreen";
import { View } from "react-native";
import CampsitesInfoScreen from "./CampsitesInfoScreen";
import { Platform, View } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Directory"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5637DD",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Directory"
        component={CampsiteInfoScreen}
        options={({ route }) => ({
          title: route.params.campsite.name,
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <DirectoryScreen
        campsites={campsites}
        onPress={(campsiteId) => {
          setSelectedCampsiteId(campsiteId);
        }}
      />
      <CampsitesInfoScreen
        campsite={
          campsites.filter((campsite) => campsite.id == selectedCampsiteId)[0]
        }
      />
    </View>
  );
};

export default Main;
