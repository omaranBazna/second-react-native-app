import React from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";

const ContactScreen = () => {
  return (
    <ScrollView>
      <Card>
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />
        <Text>1 Nucamp way</Text>
        <Text>Seatell , 3123</Text>
        <Text>U.S.A</Text>
        <Text> </Text>
        <Text>Phone:+1 312 231 2131</Text>
        <Text>Email: someone@somedomin.somthing</Text>
      </Card>
    </ScrollView>
  );
};

export default ContactScreen;
