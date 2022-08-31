import { Text, View, ScrollView } from "react-native";
import React from "react";
import { Card } from "react-native-elements";

import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseURL";
const FeaturedItem = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={{ uri: baseUrl + item.image }}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {item.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};
const HomeScreen = () => {
  const campsites = useSelector((state) => state.campsites);
  const promotions = useSelector((state) => state.promotions);
  const partners = useSelector((state) => state.partners);
  const featCampsite = campsites.campsitesArr.find(
    (campsite) => campsite.featured
  );
  const featPromotion = promotions.promotionsArr.find(
    (campsite) => campsite.featured
  );
  const featPartner = partners.partnersArr.find(
    (campsite) => campsite.featured
  );
  return (
    <ScrollView>
      <Text>Home Screen</Text>
      <FeaturedItem item={featCampsite} />
      <FeaturedItem item={featPromotion} />
      <FeaturedItem item={featPartner} />
    </ScrollView>
  );
};

export default HomeScreen;
