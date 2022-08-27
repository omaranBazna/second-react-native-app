import { Text, View, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import { CAMPSITES } from "../shared/campsites";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/partners";
import { Card } from "react-native-elements";

const FeaturedItem = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={item.Image}>
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
  const [campsites, setCampsites] = useState(CAMPSITES);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [partners, setPartners] = useState(PARTNERS);

  const featCampsite = campsites.find((campsite) => campsite.featured);
  const featPromotion = promotions.find((campsite) => campsite.featured);
  const featPartner = partners.find((campsite) => campsite.featured);
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
