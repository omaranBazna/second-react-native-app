import { View, Text } from "react-native";
import { Card, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
const RenderCampsite = ({ campsite }) => {
  if (campsite) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={campsite.image}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
              {campsite.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{campsite.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0,
  },
});

export default RenderCampsite;
