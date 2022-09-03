import RenderCampsite from "../features/campsites/RenderCampsite";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/favorites/favoritesSlice";
import { Button, Modal } from "react-native";
import { useState } from "react";

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

const CampsitesInfoScreen = ({ route }) => {
  const { campsite } = route.params;
  const comments = useSelector((state) => state.comments);
  const favorites = useSelector((state) => state.favorites);

  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
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
            <View style={{ margin: 10 }}></View>

            <Button
              onPress={() => setShowModal(!showModal)}
              color="#808080"
              title="Cancel"
            />
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
