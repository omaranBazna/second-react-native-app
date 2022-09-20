import React from "react";
import { ScrollView, Text } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as MailComposer from "expo-mail-composer";
const ContactScreen = () => {
  const sendMail = () => {
    MailComposer.composeAsync({
      recipients: ["campsite@info.com"],
      subject: "subject",
      body: "to whom he may concern",
    });
  };
  return (
    <ScrollView>
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <Card wrapperStyle={{ margin: 20 }}>
          <Card.Title>Contact Information</Card.Title>
          <Card.Divider />
          <Text>1 Nucamp way</Text>
          <Text>Seatell , 3123</Text>
          <Text>U.S.A</Text>
          <Text> </Text>
          <Text>Phone:+1 312 231 2131</Text>
          <Text>Email: someone@somedomin.somthing</Text>
          <Button
            title="Send Email"
            buttonStyle={{ backgroundColor: "#5637DD", margin: 40 }}
            icon={
              <Icon
                name="envelope-o"
                type="font-awesome"
                color="#fff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            onPress={() => sendMail()}
          />
        </Card>
      </Animatable.View>
    </ScrollView>
  );
};

export default ContactScreen;
