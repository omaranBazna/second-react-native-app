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
  return <div></div>;
};

export default ReservationsScreen;
