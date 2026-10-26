import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Materials() {

  // Stores the currently selected course filter
  const [activeFilter, setActiveFilter] = useState("All");


  // Course filters
  const filters = [
    "All",
    "CSE301",
    "CSE303",
    "EDU301",
    "GNS311",
  ];


  // Sample course materials
  const materials = [
    {
      id: 1,
      title: "Introduction to Mobile Application Development",
      course: "UIL-EDT202",
      type: "pdf",
      date: "Oct 5, 2026",
      size: "1.2 MB",
    },

    {
      id: 2,
      title: "Object Oriented Programming Notes",
      course: "COS 202",
      type: "pdf",
      date: "Oct 3, 2026",
      size: "850 KB",
    },

    {
      id: 3,
      title: "Curriculum design and instruction",
      course: "EDU201",
      type: "document",
      date: "Sep 29, 2026",
      size: "2.1 MB",
    },

    {
      id: 4,
      title: "GNS 311 Summary - Chapter 1",
      course: "GNS311",
      type: "pdf",
      date: "Sep 25, 2026",
      size: "540 KB",
    },

    {
      id: 5,
      title: "React Native Components",
      course: "CSE301",
      type: "document",
      date: "Sep 20, 2026",
      size: "975 KB",
    },

    {
      id: 6,
      title: "Inheritance and Polymorphism",
      course: "CSE303",
      type: "pdf",
      date: "Sep 18, 2026",
      size: "720 KB",
    },
  ];


  // Filter materials based on selected course
  const filteredMaterials =
    activeFilter === "All"
      ? materials
      : materials.filter(
          (item) => item.course === activeFilter
        );


  // Download function
  const handleDownload = (title: string) => {
    Alert.alert(
      "Download",
      `${title} will be downloaded.`
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
          Materials
        </Text>

        <TouchableOpacity>
          <Ionicons
            name="filter-outline"
            size={25}
            color="#222222"
          />
        </TouchableOpacity>

      </View>


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* COURSE FILTERS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContainer}
        >

          {filters.map((filter) => (

            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,

                activeFilter === filter &&
                  styles.activeFilterButton,
              ]}
              onPress={() =>
                setActiveFilter(filter)
              }
            >

              {activeFilter === filter && (
                <Ionicons
                  name="checkmark"
                  size={17}
                  color="#FFFFFF"
                  style={styles.checkIcon}
                />
              )}

              <Text
                style={[
                  styles.filterText,

                  activeFilter === filter &&
                    styles.activeFilterText,
                ]}
              >
                {filter}
              </Text>

            </TouchableOpacity>

          ))}

        </ScrollView>


        {/* MATERIAL CARDS */}

        <View style={styles.materialList}>

          {filteredMaterials.map((material) => (

            <View
              key={material.id}
              style={styles.materialCard}
            >

              {/* TOP ROW */}
              <View style={styles.materialTop}>

                <View
                  style={[
                    styles.fileIconContainer,

                    material.type === "pdf"
                      ? styles.pdfBackground
                      : styles.documentBackground,
                  ]}
                >

                  <Ionicons
                    name={
                      material.type === "pdf"
                        ? "document-text"
                        : "document-outline"
                    }
                    size={25}
                    color={
                      material.type === "pdf"
                        ? "#E53935"
                        : "#2196F3"
                    }
                  />

                </View>


                <View style={styles.materialInfo}>

                  <Text
                    style={styles.materialTitle}
                    numberOfLines={2}
                  >
                    {material.title}
                  </Text>

                  <Text style={styles.courseCode}>
                    {material.course}
                  </Text>

                </View>


                {/* DOWNLOAD BUTTON */}
                <TouchableOpacity
                  style={styles.downloadButton}
                  onPress={() =>
                    handleDownload(material.title)
                  }
                >

                  <Ionicons
                    name="download-outline"
                    size={25}
                    color="#159447"
                  />

                </TouchableOpacity>

              </View>


              {/* BOTTOM INFORMATION */}
              <View style={styles.materialBottom}>

                <Text style={styles.metaText}>
                  {material.date}
                </Text>

                <Text style={styles.metaText}>
                  {material.size}
                </Text>

              </View>

            </View>

          ))}

        </View>

      </ScrollView>


      {/* ADD MATERIAL BUTTON */}
      <TouchableOpacity
        style={styles.addButton}
        activeOpacity={0.8}
        onPress={() =>
          Alert.alert(
            "Add Material",
            "Upload material feature coming soon."
          )
        }
      >

        <Ionicons
          name="document-attach-outline"
          size={27}
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


  // SCROLL

  scrollContent: {
    paddingBottom: 110,
  },


  // FILTERS

  filterContainer: {
    paddingHorizontal: 15,
    paddingVertical: 18,
  },

  filterButton: {
    height: 44,

    paddingHorizontal: 18,

    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,

    marginRight: 10,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#FFFFFF",
  },

  activeFilterButton: {
    backgroundColor: "#159447",
    borderColor: "#159447",
  },

  filterText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
  },

  activeFilterText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  checkIcon: {
    marginRight: 5,
  },


  // MATERIAL LIST

  materialList: {
    paddingHorizontal: 15,
  },

  materialCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    padding: 16,

    marginBottom: 15,

    borderWidth: 1,
    borderColor: "#EEEEEE",

    elevation: 2,
  },

  materialTop: {
    flexDirection: "row",
    alignItems: "center",
  },


  // FILE ICON

  fileIconContainer: {
    width: 45,
    height: 45,

    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",
  },

  pdfBackground: {
    backgroundColor: "#FFEBEE",
  },

  documentBackground: {
    backgroundColor: "#E3F2FD",
  },


  // MATERIAL INFORMATION

  materialInfo: {
    flex: 1,
    marginLeft: 12,
  },

  materialTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333333",
  },

  courseCode: {
    marginTop: 5,

    fontSize: 12,
    fontWeight: "600",

    color: "#159447",
  },


  // DOWNLOAD

  downloadButton: {
    width: 40,
    height: 40,

    justifyContent: "center",
    alignItems: "center",
  },


  // BOTTOM INFO

  materialBottom: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 15,
  },

  metaText: {
    fontSize: 12,
    color: "#888888",
  },


  // FLOATING ADD BUTTON

  addButton: {
    position: "absolute",

    right: 20,
    bottom: 85,

    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: "#159447",

    justifyContent: "center",
    alignItems: "center",

    elevation: 6,
  },

});