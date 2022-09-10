import { useSelector, useDispatch } from "react-redux";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Avatar, ListItem } from "react-native-elements";

import Loading from "../components/LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { SwipeRow } from "react-native-swipe-list-view";
import React from "react";

const FavoritesScreen = ({ navigation }) => {
  const { campsitesArr, isLoading, errMess } = useSelector(
    (state) => state.campsites
  );
  const favorites = useSelector((state) => state.favorites);

  const renderFavoriteItem = ({ item: campsite }) => {
    return (
      <ListItem
        onPress={() =>
          navigation.navigate("Directory", {
            screen: "CampsiteInfo",
            params: { campsite },
          })
        }
      >
        <Avatar rounded source={{ uri: baseUrl + campsite.image }} />

        <ListItem.Content>
          <ListItem.Title>{campsite.name}</ListItem.Title>
          <ListItem.Subtitle>{campsite.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

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
      data={campsitesArr.filter((campsite) => favorites.includes(campsite.id))}
      renderItem={renderFavoriteItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default FavoritesScreen;
