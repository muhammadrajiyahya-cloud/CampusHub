import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Lectures() {

  // Stores the selected day
  const [activeDay, setActiveDay] = useState("Wednesday");

  // Stores whether alarm is on or off
  const [alarmOn, setAlarmOn] = useState(true);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  // Sample timetable
  const lectures = {
    Monday: [
      {
        id: 1,
        code: "CSE301",
        title: "Mobile Application Development",
        time: "10:00 AM - 12:00 PM",
        venue: "Computer Lab",
      },
    ],

    Tuesday: [
      {
        id: 2,
        code: "EDU301",
        title: "Educational Technology",
        time: "8:00 AM - 10:00 AM",
        venue: "Lecture Room 3",
      },
    ],

    Wednesday: [
      {
        id: 3,
        code: "CSE303",
        title: "Object Oriented Programming",
        time: "10:00 AM - 12:00 PM",
        venue: "Computer Laboratory",
      },

      {
        id: 4,
        code: "GNS311",
        title: "General Studies",
        time: "2:00 PM - 4:00 PM",
        venue: "Lecture Theatre",
      },
    ],

    Thursday: [
      {
        id: 5,
        code: "EDU305",
        title: "Teaching Methods",
        time: "9:00 AM - 11:00 AM",
        venue: "Education Block",
      },
    ],

    Friday: [],
  };


  // Lecture list for selected day
  const selectedLectures =
    lectures[activeDay as keyof typeof lectures];


  // Review button function
  const handleReview = () => {
    Alert.alert(
      "Lecture Review",
      "Your lecture timetable is currently up to date."
    );
  };


  // Alarm function
  const handleAlarm = () => {
    setAlarmOn(!alarmOn);

    Alert.alert(
      "Lecture Alarm",
      alarmOn
        ? "Lecture reminders have been turned off."
        : "Lecture reminders have been turned on."
    );
  };


  return (
    <View style={styles.screen}>

      {/* HEADER */}
      <View style={styles.header}>

        <Image
          source={require("../../../assets/images/campushub-logo.png")}
          style={styles.profileImage}
          resizeMode="contain"
        />

        <Text style={styles.headerTitle}>
          Lectures
        </Text>

        <TouchableOpacity>
          <Ionicons
            name="calendar-outline"
            size={25}
            color="#222222"
          />
        </TouchableOpacity>

      </View>


      {/* DAY TABS */}
      <View style={styles.daysContainer}>

        {days.map((day) => (

          <TouchableOpacity
            key={day}
            style={styles.dayButton}
            onPress={() => setActiveDay(day)}
          >

            <Text
              style={[
                styles.dayText,

                activeDay === day &&
                  styles.activeDayText,
              ]}
            >
              {day}
            </Text>

            {activeDay === day && (
              <View style={styles.activeLine} />
            )}

          </TouchableOpacity>

        ))}

      </View>


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* WARNING BANNER */}
        <View style={styles.warningBox}>

          <View style={styles.warningIconBox}>

            <Ionicons
              name="time-outline"
              size={24}
              color="#F59E0B"
            />

          </View>


          <View style={styles.warningTextContainer}>

            <Text style={styles.warningTitle}>
              Lecture times may be outdated
            </Text>

            <Text style={styles.warningText}>
              Last update unknown
            </Text>

          </View>


          <TouchableOpacity
            style={styles.reviewButton}
            onPress={handleReview}
          >

            <Text style={styles.reviewButtonText}>
              Review
            </Text>

          </TouchableOpacity>

        </View>


        {/* LECTURES */}
        {selectedLectures.length > 0 ? (

          selectedLectures.map((lecture) => (

            <View
              key={lecture.id}
              style={styles.lectureCard}
            >

              {/* COURSE */}
              <Text style={styles.courseCode}>
                {lecture.code}
              </Text>

              <Text style={styles.courseTitle}>
                {lecture.title}
              </Text>


              <View style={styles.divider} />


              {/* TIME AND VENUE */}
              <View style={styles.detailsRow}>

                <View style={styles.detailSection}>

                  <Text style={styles.detailValue}>
                    {lecture.time}
                  </Text>

                  <Text style={styles.detailLabel}>
                    Time
                  </Text>

                </View>


                <View style={styles.detailSectionRight}>

                  <Text style={styles.venueValue}>
                    {lecture.venue}
                  </Text>

                  <Text style={styles.detailLabel}>
                    Venue
                  </Text>

                </View>

              </View>

            </View>

          ))

        ) : (

          <View style={styles.emptyContainer}>

            <Ionicons
              name="calendar-clear-outline"
              size={65}
              color="#CCCCCC"
            />

            <Text style={styles.emptyTitle}>
              No Lecture
            </Text>

            <Text style={styles.emptyText}>
              You have no lecture scheduled for {activeDay}.
            </Text>

          </View>

        )}

      </ScrollView>


      {/* ALARM BUTTON */}
      <TouchableOpacity
        style={styles.alarmButton}
        onPress={handleAlarm}
        activeOpacity={0.8}
      >

        <Ionicons
          name={
            alarmOn
              ? "notifications"
              : "notifications-off-outline"
          }
          size={22}
          color="#FFFFFF"
        />

        <Text style={styles.alarmText}>
          {alarmOn ? "Alarms On" : "Alarms Off"}
        </Text>

        <Ionicons
          name="chevron-up"
          size={17}
          color="#FFFFFF"
        />

      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },


  // HEADER

  header: {
    backgroundColor: "#FFFFFF",

    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 18,

    flexDirection: "row",
    alignItems: "center",

    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },

  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  headerTitle: {
    flex: 1,

    marginLeft: 15,

    fontSize: 25,
    fontWeight: "bold",

    color: "#222222",
  },


  // DAYS

  daysContainer: {
    backgroundColor: "#FFFFFF",

    flexDirection: "row",
    justifyContent: "space-around",

    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },

  dayButton: {
    paddingTop: 18,
    alignItems: "center",
  },

  dayText: {
    fontSize: 13,
    color: "#555555",
  },

  activeDayText: {
    color: "#159447",
    fontWeight: "bold",
  },

  activeLine: {
    width: 40,
    height: 3,

    backgroundColor: "#159447",

    marginTop: 12,

    borderRadius: 5,
  },


  // SCROLL

  scrollContent: {
    padding: 15,
    paddingBottom: 120,
  },


  // WARNING

  warningBox: {
    backgroundColor: "#FFF9EA",

    borderWidth: 1,
    borderColor: "#FDE9B5",

    borderRadius: 14,

    padding: 14,

    flexDirection: "row",
    alignItems: "center",

    marginBottom: 20,
  },

  warningIconBox: {
    width: 45,
    height: 45,

    borderRadius: 12,

    backgroundColor: "#FFF1C7",

    justifyContent: "center",
    alignItems: "center",
  },

  warningTextContainer: {
    flex: 1,
    marginLeft: 12,
  },

  warningTitle: {
    fontSize: 14,
    fontWeight: "bold",

    color: "#333333",
  },

  warningText: {
    fontSize: 12,
    color: "#888888",

    marginTop: 4,
  },

  reviewButton: {
    backgroundColor: "#F59E0B",

    paddingVertical: 10,
    paddingHorizontal: 16,

    borderRadius: 10,
  },

  reviewButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },


  // LECTURE CARD

  lectureCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 15,

    padding: 20,

    marginBottom: 15,

    borderWidth: 1,
    borderColor: "#EEEEEE",

    elevation: 2,
  },

  courseCode: {
    fontSize: 16,
    fontWeight: "600",

    color: "#333333",
  },

  courseTitle: {
    fontSize: 14,

    color: "#888888",

    marginTop: 6,
  },

  divider: {
    height: 1,

    backgroundColor: "#EEEEEE",

    marginVertical: 20,
  },

  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  detailSection: {
    flex: 1,
  },

  detailSectionRight: {
    flex: 1,
    alignItems: "flex-end",
  },

  detailValue: {
    fontSize: 15,

    color: "#333333",

    fontWeight: "500",
  },

  venueValue: {
    fontSize: 15,

    color: "#159447",

    fontWeight: "500",

    textAlign: "right",
  },

  detailLabel: {
    marginTop: 8,

    fontSize: 13,

    color: "#159447",
  },


  // EMPTY STATE

  emptyContainer: {
    marginTop: 100,

    alignItems: "center",

    paddingHorizontal: 30,
  },

  emptyTitle: {
    marginTop: 15,

    fontSize: 22,
    fontWeight: "bold",

    color: "#555555",
  },

  emptyText: {
    marginTop: 7,

    color: "#888888",

    textAlign: "center",
  },


  // ALARM

  alarmButton: {
    position: "absolute",

    right: 20,
    bottom: 85,

    backgroundColor: "#159447",

    paddingVertical: 14,
    paddingHorizontal: 18,

    borderRadius: 18,

    flexDirection: "row",
    alignItems: "center",

    elevation: 6,
  },

  alarmText: {
    color: "#FFFFFF",

    fontWeight: "600",

    marginHorizontal: 8,
  },

});