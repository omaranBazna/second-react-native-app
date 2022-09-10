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

  const renderFavoriteItem = ({ item: campsite }) => {
    return (
      <ListItem
        onPress={() => {
          navigation.navigate("Directory", {
            screen: "CampsiteInfo",
            params: { campsite },
          });
        }}
      >
        <Avatar rounded src={{ uri: baseUrl + campsite.image }} />
        <ListItem.content>
          <ListItem.Title>{campsite.name}</ListItem.Title>
          <ListItem.Subtitle>{campsite.description}</ListItem.Subtitle>
        </ListItem.content>
      </ListItem>
    );
  };
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
