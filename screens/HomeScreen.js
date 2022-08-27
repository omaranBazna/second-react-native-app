import { Text, View, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import { CAMPSITES } from "../shared/campsites";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/partners";
const HomeScreen = () => {
  const [campsites, setCampsites] = useState(CAMPSITES);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [partners, setPartners] = useState(PARTNERS);
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
