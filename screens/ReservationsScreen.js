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
      <View style={styles.formRow}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formRow: {},
});
export default ReservationsScreen;
