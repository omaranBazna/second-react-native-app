import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Switch,
  Button,
  Platform,
  Modal,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

import * as Animatable from "react-native-animatable";
import * as Notifications from "expo-notifications";
const ReservationsScreen = () => {
  const [campers, setCampers] = useState(1);
  const [hikeIn, setHikeIn] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowCalendar(Platform.OS == "ios");
    setDate(currentDate);
  };
  const handelReservation = () => {
    Alert.alert(
      "Begin search?",
      `Number of Campers : ${campers}\nHike-In? : ${
        hikeIn ? "Yes" : "No"
      }\nDate : ${date.toLocaleDateString("en-US")}`,
      [
        {
          text: "Cancel",
          onPress: () => {
            resetForm();
          },
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            console.log("campers", campers);
            console.log("Hikein", hikeIn);
            console.log("date", date);
            console.log("show Calender", showCalendar);
          },
          style: "ok",
        },
      ],
      { cancelable: false }
    );
  };

  const resetForm = () => {
    setCampers(1);
    setHikeIn(false);
    setDate(new Date());
    setShowCalendar(false);
  };

  const presentLocalNotification = async (reservationDate) => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Your Campsite Reservation Search",
        body: `Search for ${reservationDate} requested`,
      },
      trigger: null,
    });
  };

  return (
    <ScrollView>
      <Animatable.View animation="zoomIn" duration={2000} delay={1000}>
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
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Hike In?</Text>
          <Switch
            style={styles.formItem}
            value={hikeIn}
            trackColor={{ true: "#5637DD", false: null }}
            onValueChange={(value) => {
              setHikeIn(value);
            }}
          ></Switch>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Date:</Text>
          <Button
            onPress={() => {
              setShowCalendar(true);
            }}
            title={date.toLocaleDateString("en-US")}
            color="#5637DD"
            accessibilityLabel="Tap me to select a reservation date"
          />
        </View>

        {showCalendar && (
          <DateTimePicker
            style={styles.formItem}
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
          ></DateTimePicker>
        )}

        <View style={styles.formRow}>
          <Button
            title="Search Availability "
            onPress={handelReservation}
            color="#5637DD"
            accessibilityLabel="Tap me to confirm availability "
          />
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#5637DD",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
});
export default ReservationsScreen;
