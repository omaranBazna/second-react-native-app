import { FlatList, View, Text } from "react-native";
import { Avatar, ListItem, Tile } from "react-native-elements";
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
      <Animatable.View animation="fadeInRightBig" duration={2000}>
        <Tile
          title={campsite.name}
          caption={campsite.description}
          onPress={() => navigation.navigate("CampsiteInfo", { campsite })}
          imageSrc={{ uri: baseUrl + campsite.image }}
          rounded
        />
      </Animatable.View>
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
