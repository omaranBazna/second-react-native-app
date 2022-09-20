import DirectoryScreen from "./DirectoryScreen";
import { StyleSheet, Image, Text, Platform, View } from "react-native";
import { Icon } from "react-native-elements";
import CampsitesInfoScreen from "./CampsitesInfoScreen";
import FavoritesScreen from "./FavoritesScreen";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";
import AboutScreen from "./AboutScreen";
import ReservationsScreen from "./ReservationsScreen";
import LoginScreen from "./LoginScreen";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPartners } from "../features/partners/partnersSlice";
import { fetchCampsites } from "../features/campsites/campsitesSlice";
import { fetchPromotions } from "../features/promotions/promotionsSlice";
import { fetchComments } from "../features/comments/commentsSlice";

const Drawer = createDrawerNavigator();
const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#5637DD" },
};
import logo from "../assets/images/logo.png";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image source={logo} style={styles.drawerImage} />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Nucampsite</Text>
        </View>
      </View>
      <DrawerItemList
        {...props}
        labelStyle={{ fontWeight: "bold" }}
      ></DrawerItemList>
    </DrawerContentScrollView>
  );
};

const ReservationNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Reservation"
        component={ReservationsScreen}
        options={({ navigation }) => {
          return {
            title: "Reservation Search",
            headerLeft: () => {
              return (
                <Icon
                  name="tree"
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

const FavoritesNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({ navigation }) => {
          return {
            title: "Favorites",
            headerLeft: () => {
              return (
                <Icon
                  name="heart"
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

const LoginNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({ navigation }) => {
          return {
            title: "Login",
            headerLeft: () => {
              return (
                <Icon
                  name="sign-in"
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
              return (
                <Icon
                  name="address-card"
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
              return (
                <Icon
                  name="info-circle"
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
              return (
                <Icon
                  name="list"
                  type="font-awesome"
                  iconStyle={styles.stackIcon}
                  onPress={() => navigation.toggleDrawer()}
                />
              );
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPromotions());
    dispatch(fetchPartners());
    dispatch(fetchComments());
  }, [dispatch]);
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS == "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={CustomDrawerContent}
        drawerStyle={{ backgroundColor: "#CEC8FF" }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            title: "Home",
            drawerIcon: () => {
              return (
                <Icon
                  name="home"
                  type="font-awesome"
                  size={24}
                  iconStyle={{ width: 24 }}
                  color={"white"}
                />
              );
            },
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Directory"
          component={DirectoryNavigator}
          options={{
            title: "Directory",
            drawerIcon: () => {
              return (
                <Icon
                  name="list"
                  type="font-awesome"
                  size={24}
                  iconStyle={{ width: 24 }}
                  color={"white"}
                />
              );
            },
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="ReserveCampsite"
          component={ReservationNavigator}
          options={{
            title: "Reserve Campsite",
            drawerIcon: () => {
              return (
                <Icon
                  name="tree"
                  type="font-awesome"
                  size={24}
                  iconStyle={{ width: 24 }}
                  color={"white"}
                />
              );
            },
          }}
        ></Drawer.Screen>

        <Drawer.Screen
          name="FavoritesCampsites"
          component={FavoritesNavigator}
          options={{
            title: "My Favorites",
            drawerIcon: () => {
              return (
                <Icon
                  name="heart"
                  type="font-awesome"
                  size={24}
                  iconStyle={{ width: 24 }}
                  color={"white"}
                />
              );
            },
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="About"
          component={AboutNavigator}
          options={{
            title: "About",
            drawerIcon: () => {
              return (
                <Icon
                  name="info"
                  type="font-awesome"
                  size={24}
                  iconStyle={{ width: 24 }}
                  color={"white"}
                />
              );
            },
          }}
        ></Drawer.Screen>

        <Drawer.Screen
          name="Contact"
          component={ContactNavigator}
          options={{
            title: "Contact",
            drawerIcon: () => {
              return (
                <Icon
                  name="address-card"
                  type="font-awesome"
                  size={24}
                  iconStyle={{ width: 24 }}
                  color={"white"}
                />
              );
            },
          }}
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
  drawerHeader: {
    backgroundColor: "#5637DD",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
export default Main;
