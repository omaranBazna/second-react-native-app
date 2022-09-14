import { View, Text, PanResponder } from "react-native";
import { Card, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import { baseUrl } from "../../shared/baseUrl";
const RenderCampsite = ({
  campsite,
  isFavorite,
  markFavorite,
  onShowModal,
}) => {
  const isLeftSwap = ({ dx }) => dx < -200;

  /*
  const panResponder = panResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderEnd: (e, gestureState) => {
      console.log("gesture end", gestureState);
    },
  });
  */

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderEnd: (e, gestureState) => {
      console.log("end");
      console.log(gestureState);
    },
  });
  if (campsite) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={{ uri: baseUrl + campsite.image }}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text style={styles.Card}>{campsite.name}</Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{campsite.description}</Text>
        <View style={styles.cardRow}>
          <Icon
            onPress={() => {
              console.log("test");
              markFavorite();
            }}
            name={isFavorite ? "heart" : "heart-o"}
            type="font-awesome"
            color="#f50"
            raised
            reverse
          />

          <Icon
            onPress={() => onShowModal()}
            name={"pencil"}
            type="font-awesome"
            color="#5637DD"
            raised
            reverse
          />
        </View>
      </Card>
    );
  }
  return <View />;
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0,
    marginBottom: 20,
  },
  cardRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  cardText: {
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});

export default RenderCampsite;
