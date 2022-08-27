import RenderCampsite from "../features/campsites/RenderCampsite";
const CampsitesInfoScreen = ({ route }) => {
  const { campsite } = route.params;
  return <RenderCampsite campsite={campsite} />;
};

export default CampsitesInfoScreen;
