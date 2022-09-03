import RenderCampsite from "../features/campsites/RenderCampsite";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/favorites/favoritesSlice";
import { Button, Modal } from "react-native";
import { useState } from "react";
import { Input, Rating } from "react-native-elements";

const CampsitesInfoScreen = ({ route }) => {
  const { campsite } = route.params;
  const comments = useSelector((state) => state.comments);
  const favorites = useSelector((state) => state.favorites);

  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newComment = {
      author,
      rating,
      text,
      campsiteId: campsite.id,
    };
    console.log(newComment);
    setShowModal(!showModal);
    resetForm();
  };
  const RenderCommentItem = ({ item }) => {
    return (
      <View style={styles.commentItem}>
        <Text style={{ fontSize: 14 }}>{item.text}</Text>
        <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
        <Text style={{ fontSize: 12 }}>
          -- {item.author} , {item.date}
        </Text>
      </View>
    );
  };

  const resetForm = () => {
    setRating(5);
    setAuthor("");
    setText("");
  };

  return (
    <>
      <FlatList
        data={comments.commentsArr.filter(
          (comment) => comment.campsiteId === campsite.id
        )}
        renderItem={RenderCommentItem}
        keyExtractor={(item) => {
          item.id.toString();
        }}
        contentContainerStyle={{
          marginHorizontal: 20,
          paddingVertical: 20,
        }}
        ListHeaderComponent={
          <>
            <RenderCampsite
              campsite={campsite}
              isFavorite={favorites.includes(campsite.id)}
              markFavorite={() => {
                dispatch(toggleFavorite(campsite.id));
              }}
              onShowModal={() => setShowModal(!showModal)}
            />
            <Text style={styles.commentsTitle}>Comments</Text>
          </>
        }
      />
      {showModal && (
        <Modal>
          <View style={styles.modal}>
            <Rating
              startingValue={rating}
              showRating
              imageSize={40}
              onFinishRating={(rating) => setRating(rating)}
              style={{ paddingVertical: 10 }}
            />
            <Input
              placeholder="your name"
              leftIcon={{ type: "font-awesome", name: "user-o" }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={(value) => {
                setAuthor(value);
              }}
              value={author}
            ></Input>
            <Input
              placeholder="your comment"
              leftIcon={{ type: "font-awesome", name: "comment-o" }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={(value) => {
                setText(value);
              }}
              value={text}
            ></Input>
            <View style={{ margin: 10 }}>
              <Button
                color="#5637DD"
                title="Submit"
                onPress={() => handleSubmit()}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Button
                onPress={() => {
                  setShowModal(!showModal);
                  resetForm();
                }}
                color="#808080"
                title="Cancel"
              />
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  commentsTitle: {
    textAlign: "center",
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    color: "#434840",
    padding: 10,
    paddingTop: 30,
  },
  commentItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
});
export default CampsitesInfoScreen;
