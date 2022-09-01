import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Switch,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const ReservationsScreen = () => {
  const [campers, setCampers] = useState(1);
  const [hikeIn, setHikeIn] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handelReservation = () => {
    console.log("campers", campers);
    console.log("Hikein", hikeIn);
    console.log("date", date);
    console.log("show Calender", showCalendar);
    setCampers(1);
    setHikeIn(false);
    setDate(new Date());
    setShowCalendar(false);
  };
  return (
    <ScrollView>
      <View style={styles.formRow}>
        <Text style={styles.formLabel}>Number of Campers:</Text>
        <Picker
          style={styles.formItem}
          selectedValue={campers}
          onValueChange={(itemValue) => setCampers(itemValue)}
        >
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
          <Picker.Item label="4" value={4} />
          <Picker.Item label="5" value={5} />
          <Picker.Item label="6" value={6} />
        </Picker>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formRow: {},
  formLabel: {},
});
export default ReservationsScreen;
