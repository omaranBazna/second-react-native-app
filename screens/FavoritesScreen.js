import { useSelector, useDispatch } from "react-redux";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { Avatar, ListItem } from "react-native-elements";

import Loading from "../components/LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { SwipeRow } from "react-native-swipe-list-view";
import React from "react";
import { toggleFavorite } from "../features/favorites/favoritesSlice";
import * as Animatable from "react-native-animatable";
const FavoritesScreen = ({ navigation }) => {
  const { campsitesArr, isLoading, errMess } = useSelector(
    (state) => state.campsites
  );
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const renderFavoriteItem = ({ item: campsite }) => {
    return (
      <SwipeRow rightOpenValue={-100}>
        <View style={styles.deleteView}>
          <TouchableOpacity
            style={styles.deleteTouchable}
            onPress={() => {
              Alert.alert(
                "Delete Favorite?",
                "Are you sure you wish to delete the favorite campsite " +
                  campsite.name +
                  "?",
                [
                  {
                    text: "Cancel",
                    onPress: () => {
                      console.log("Nothing Happen");
                    },
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => dispatch(toggleFavorite(campsite.id)),
                    style: "ok",
                  },
                ],
                { cancelable: false }
              );
            }}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
        <View>
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
        </View>
      </SwipeRow>
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
const styles = StyleSheet.create({
  deleteView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  deleteTouchable: {
    backgroundColor: "red",
    height: "100%",
    justifyContent: "center",
  },
  deleteText: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
    width: 100,
  },
});
export default FavoritesScreen;
