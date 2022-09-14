import { FlatList, View, Text } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { useState } from "react";
import { CAMPSITES } from "../shared/campsites";

import { baseUrl } from "../shared/baseUrl";
import Loading from "../components/LoadingComponent";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";
import * as Animatable from "react-native-animatable";
const DirectoryScreen = ({ navigation }) => {
  const campsites = useSelector((state) => state.campsites);

  if (campsites.isLoading) {
    return <Loading />;
  }

  if (campsites.errMess) {
    return (
      <View>
        <Text>{campsites.errMess}</Text>
      </View>
    );
  }
  const renderDirectoryItem = ({ item: campsite }) => {
    return (
      <ListItem
        onPress={() => navigation.navigate("CampsiteInfo", { campsite })}
      >
        <Avatar source={{ uri: baseUrl + campsite.image }} rounded />
        <ListItem.Content>
          <ListItem.Title>{campsite.name}</ListItem.Title>
          <ListItem.Subtitle>{campsite.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <FlatList
      data={campsites.campsitesArr}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;
