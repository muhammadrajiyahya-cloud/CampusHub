import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Assessments() {

  // Controls whether Tests or Exams is active
  const [activeTab, setActiveTab] = useState("Tests");

  // Controls CBT button state
  const [cbtOpen, setCbtOpen] = useState(false);


  const handleSolutions = () => {
    Alert.alert(
      "Solutions",
      "Assessment solutions will appear here."
    );
  };


  const handleCBT = () => {
    setCbtOpen(!cbtOpen);

    Alert.alert(
      "CBT Practice",
      cbtOpen
        ? "CBT practice closed."
        : "CBT practice opened."
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
          Assessments
        </Text>

        <TouchableOpacity
          style={styles.solutionsButton}
          onPress={handleSolutions}
        >
          <Ionicons
            name="bulb-outline"
            size={18}
            color="#159447"
          />

          <Text style={styles.solutionsText}>
            Solutions
          </Text>
        </TouchableOpacity>

      </View>


      {/* TAB SWITCHER */}
      <View style={styles.tabContainer}>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("Tests")}
        >

          <Text
            style={[
              styles.tabText,
              activeTab === "Tests" &&
                styles.activeTabText,
            ]}
          >
            Tests
          </Text>

          {activeTab === "Tests" && (
            <View style={styles.activeLine} />
          )}

        </TouchableOpacity>


        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("Exams")}
        >

          <Text
            style={[
              styles.tabText,
              activeTab === "Exams" &&
                styles.activeTabText,
            ]}
          >
            Exams
          </Text>

          {activeTab === "Exams" && (
            <View style={styles.activeLine} />
          )}

        </TouchableOpacity>

      </View>


      {/* CONTENT */}
      <View style={styles.content}>

        {activeTab === "Tests" ? (

          <View style={styles.emptyState}>

            <Ionicons
              name="document-text-outline"
              size={70}
              color="#CCCCCC"
            />

            <Text style={styles.emptyTitle}>
              No Test Added Yet
            </Text>

            <Text style={styles.emptyText}>
              Your available tests will appear here.
            </Text>

          </View>

        ) : (

          <View style={styles.emptyState}>

            <Ionicons
              name="school-outline"
              size={70}
              color="#CCCCCC"
            />

            <Text style={styles.emptyTitle}>
              No Exam Added Yet
            </Text>

            <Text style={styles.emptyText}>
              Your available exams will appear here.
            </Text>

          </View>

        )}

      </View>


      {/* CBT BUTTON */}
      <TouchableOpacity
        style={styles.cbtButton}
        onPress={handleCBT}
        activeOpacity={0.8}
      >

        <Ionicons
          name="desktop-outline"
          size={22}
          color="#FFFFFF"
        />

        <Text style={styles.cbtText}>
          CBT
        </Text>

        <Ionicons
          name={
            cbtOpen
              ? "chevron-down"
              : "chevron-up"
          }
          size={18}
          color="#FFFFFF"
        />

      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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


  // SOLUTIONS BUTTON

  solutionsButton: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#EAF7EF",

    paddingVertical: 9,
    paddingHorizontal: 13,

    borderRadius: 20,
  },

  solutionsText: {
    marginLeft: 6,

    color: "#159447",

    fontWeight: "600",

    fontSize: 13,
  },


  // TAB SWITCHER

  tabContainer: {
    flexDirection: "row",

    backgroundColor: "#FFFFFF",

    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },

  tabButton: {
    flex: 1,

    paddingTop: 18,

    alignItems: "center",
  },

  tabText: {
    fontSize: 15,

    color: "#555555",
  },

  activeTabText: {
    color: "#159447",

    fontWeight: "bold",
  },

  activeLine: {
    marginTop: 12,

    width: 45,
    height: 3,

    borderRadius: 5,

    backgroundColor: "#159447",
  },


  // CONTENT

  content: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },

  emptyState: {
    alignItems: "center",

    paddingHorizontal: 30,
  },

  emptyTitle: {
    marginTop: 18,

    fontSize: 22,
    fontWeight: "bold",

    color: "#555555",
  },

  emptyText: {
    marginTop: 8,

    fontSize: 14,

    color: "#888888",

    textAlign: "center",
  },


  // CBT BUTTON

  cbtButton: {
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

  cbtText: {
    marginHorizontal: 8,

    color: "#FFFFFF",

    fontWeight: "600",
  },

});