import { Text, View, Animated } from "react-native";
import { useEffect, useRef } from "react";
import React from "react";
import { Card } from "react-native-elements";

import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

import Loading from "../components/LoadingComponent";
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

  const scaleValue = useRef(new Animated.Value(0).current);
  const scaleAnimation = Animated.timing(scaleValue, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true,
  });
  const featCampsite = campsites.campsitesArr.find(
    (campsite) => campsite.featured
  );
  const featPromotion = promotions.promotionsArr.find(
    (campsite) => campsite.featured
  );
  const featPartner = partners.partnersArr.find(
    (campsite) => campsite.featured
  );
  const isLoading = campsites.isLoading;

  if (isLoading) {
    return <Loading />;
  }

  useEffect(scaleAnimation.start(), []);
  return (
    <Animated.ScrollView style={{ transform: [{ scale: scaleValue }] }}>
      <Text>Home Screen</Text>
      <FeaturedItem item={featCampsite} />
      <FeaturedItem item={featPromotion} />
      <FeaturedItem item={featPartner} />
    </Animated.ScrollView>
  );
};

export default HomeScreen;
