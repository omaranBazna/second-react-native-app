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

  const favorites = useSelector((state) => state.favorites);

  if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    <View>
      <Text>{errMess}</Text>
    </View>;
  }
  return (
    <FlatList
      data={campsiteArr.filter((campsite) => {
        return favorites.includes(campsite.id);
      })}
      renderItem={renderFavoriteItem}
      keyExtractor={(item) => {
        item.id.toString();
      }}
    />
  );
};

export default FavoritesScreen;
