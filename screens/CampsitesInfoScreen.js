import RenderCampsite from "../features/campsites/RenderCampsite";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { COMMENTS } from "../shared/comments";
const CampsitesInfoScreen = ({ route }) => {
  const { campsite } = route.params;
  const [comments, setComments] = useState(COMMENTS);
  return (
    <FlatList
      data={comments.forEach((comment) => comment.campsiteId == campsite)}
    />
  );
};

export default CampsitesInfoScreen;
