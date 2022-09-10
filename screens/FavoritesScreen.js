import { useSelector } from "react-redux";
import { View, FlatList, Text } from "react-native";

import { Avatar, ListItem } from "react-native-elements";

import Loading from "../components/LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

import React from "react";

const FavoritesScreen = ({ navigation }) => {
  const { campsiteArr, isLoading, errMess } = useSelector(
    (state) => state.campsites
  );
  return <div></div>;
};

export default FavoritesScreen;
