import RenderCampsite from "../features/campsites/RenderCampsite";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { COMMENTS } from "../shared/comments";
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
});

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

  const [favorite, setFavorite] = useState(false);
  return (
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
            isFavorite={favorite}
            markFavorite={() => {
              setFavorite(true);
            }}
          />
          <Text style={styles.commentsTitle}>Comments</Text>
        </>
      }
    />
  );
};

export default CampsitesInfoScreen;
