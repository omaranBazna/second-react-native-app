import DirectoryScreen from "./DirectoryScreen";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import CampsitesInfoScreen from "./CampsitesInfoScreen";
import { Platform, View, Text } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";
import AboutScreen from "./AboutScreen";
const Drawer = createDrawerNavigator();
const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#5637DD" },
};

const ContactNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={({ navigation }) => {
          return {
            title: "Contact us",
            headerLeft: () => {
              <Icon
                name="address-card"
                type="font-awesome"
                icon-style={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
              />;
            },
          };
        }}
      />
    </Stack.Navigator>
  );
};

const AboutNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => {
          return {
            title: "About",
            headerLeft: () => {
              <Icon
                name="info-circle"
                type="font-awesome"
                icon-style={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
              />;
            },
          };
        }}
      />
    </Stack.Navigator>
  );
};
const HomeNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => {
          return {
            title: "Home",
            headerLeft: () => {
              return (
                <Icon
                  name="home"
                  type="font-awesome"
                  iconStyle={styles.stackIcon}
                  onPress={() => navigation.toggleDrawer()}
                />
              );
            },
          };
        }}
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
        options={({ navigation }) => {
          return {
            title: "Campsite Directory",
            headerLeft: () => {
              <Icon
                name="list-icon"
                type="font-awesome"
                icon-style={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
              />;
            },
          };
        }}
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
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{ backgroundColor: "#CEC8FF" }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{ title: "Home" }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Directory"
          component={DirectoryNavigator}
          options={{ title: "Directory" }}
        ></Drawer.Screen>

        <Drawer.Screen
          name="About"
          component={AboutNavigator}
          options={{ title: "About" }}
        ></Drawer.Screen>

        <Drawer.Screen
          name="Contact"
          component={ContactNavigator}
          options={{ title: "Contact" }}
        ></Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 30,
    color: "#fff",
    fontSize: 24,
  },
});
export default Main;
