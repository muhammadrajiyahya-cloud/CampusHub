import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { useState, useEffect} from "react";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useSavedPosts,
} from "../../context/SavedPostsContext";


export default function Community() {

  // =========================
  // STATES
  // =========================

  // Controls side menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Stores selected profile picture
  const [profileImage, setProfileImage] =
    useState<string | null>(null);
    useEffect(() => {
  loadProfileImage();
  loadStudentProfile();
}, []);
const loadStudentProfile = async () => {
  try {

    const savedProfile =
      await AsyncStorage.getItem(
        "studentProfile"
      );

    if (savedProfile !== null) {

      const profile =
        JSON.parse(savedProfile);

      setStudentName(
        profile.studentName
      );

      setUsername(
        profile.username
      );

      setLevel(
        profile.level
      );

      setSemester(
        profile.semester
      );

      setCgpa(
        profile.cgpa
      );
    }

  } catch (error) {

    console.log(
      "Error loading student profile:",
      error
    );

  }
};

const loadProfileImage = async () => {
  try {
    const savedImage =
      await AsyncStorage.getItem("profileImage");

    if (savedImage !== null) {
      setProfileImage(savedImage);
    }
  } catch (error) {
    console.log("Error loading profile image:", error);
  }
};
  // Saved posts context
  const {
    toggleSavedPost,
    isSaved,
  } = useSavedPosts();


  // =========================
  // PICK PROFILE PICTURE
  // =========================

  const pickProfileImage = async () => {

    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {

      Alert.alert(
        "Permission Required",
        "Please allow CampusHub to access your photos."
      );

      return;
    }


    const result =
      await ImagePicker.launchImageLibraryAsync({

        mediaTypes: ["images"],

        // Allows user to crop the picture
        allowsEditing: true,

        // Square shape for profile picture
        aspect: [1, 1],

        quality: 1,
      });


    // If user selected an image
    if (!result.canceled) {

  const selectedImage =
    result.assets[0].uri;

  setProfileImage(selectedImage);

  await AsyncStorage.setItem(
    "profileImage",
    selectedImage
  );
}
  }
const [editProfileOpen, setEditProfileOpen] =
  useState(false);

const [studentName, setStudentName] =
  useState("CampusHub Student");

const [username, setUsername] =
  useState("@campushub_student");

const [level, setLevel] =
  useState("300 Level");

const [semester, setSemester] =
  useState("1st Semester");

const [cgpa, setCgpa] =
  useState("0.00");
  // =========================
  // COMMUNITY POSTS
  // =========================

  const posts = [

    {
      id: 1,

      title:
        "EXAM TIPS FOR STUDENTS",

      description:
        "Pay attention to every part of your course outline. Start reading early, revise consistently and practise past questions before examination week. -Mr. Amao",

      time:
        "2 hours ago",

      likes: 31,

      comments: 11,

      reposts: 3,

      hasImage: false,
    },


    {
      id: 2,

      title:
        "CAMPUS UPDATE",

      description:
        "Welcome to CampusHub, your student companion for academic updates, lecture information, course materials and assessments.",

      time:
        "4 hours ago",

      likes: 45,

      comments: 14,

      reposts: 6,

      hasImage: true,
    },


    {
      id: 3,

      title:
        "LECTURE REMINDER",

      description:
        "Students are advised to check the Lectures tab regularly for timetable updates, lecture venues and scheduled class times.",

      time:
        "6 hours ago",

      likes: 27,

      comments: 7,

      reposts: 2,

      hasImage: false,
    },


    {
      id: 4,

      title:
        "NEW COURSE MATERIALS AVAILABLE",

      description:
        "New lecture notes have been added to the Materials section. Select your course code to view the materials available for your courses.",

      time:
        "Yesterday",

      likes: 38,

      comments: 9,

      reposts: 5,

      hasImage: false,
    },


    {
      id: 5,

      title:
        "SIWES INFORMATION",

      description:
        "Students participating in industrial training should ensure that their logbooks are updated regularly and properly signed by their supervisors.",

      time:
        "Yesterday",

      likes: 52,

      comments: 18,

      reposts: 8,

      hasImage: true,
    },


    {
      id: 6,

      title:
        "STUDY SMARTER",

      description:
        "Consistency is more effective than last-minute preparation. Create a simple study timetable and dedicate time to each course every week.",

      time:
        "2 days ago",

      likes: 64,

      comments: 20,

      reposts: 10,

      hasImage: false,
    },


    {
      id: 7,

      title:
        "ASSESSMENT UPDATE",

      description:
        "Upcoming tests and examination information will be displayed in the Assessments section. Check the page regularly for new updates.",

      time:
        "3 days ago",

      likes: 29,

      comments: 6,

      reposts: 4,

      hasImage: false,
    },

  ];


  // =========================
  // SIDE MENU ITEMS
  // =========================

  const menuItems = [

    {
      name: "Premium",
      icon: "star-outline",
      action: "premium",
    },

    {
      name: "Student Union",
      icon: "people-outline",
      action: "union",
    },

    {
      name: "Manage Classroom",
      icon: "people-circle-outline",
      action: "classroom",
    },

    {
      name: "CBT Practice",
      icon: "desktop-outline",
      action: "cbt",
    },

    {
      name: "Add / Drop Course",
      icon: "documents-outline",
      action: "courses",
    },

    {
      name: "Change Level",
      icon: "swap-vertical-outline",
      action: "level",
    },

    {
      name: "School Portal",
      icon: "school-outline",
      action: "portal",
    },

    {
      name: "Bookmarks",
      icon: "bookmark-outline",
      action: "bookmarks",
    },

    {
      name: "Settings",
      icon: "settings-outline",
      action: "settings",
    },

  ] as const;


  // =========================
  // NOTIFICATION
  // =========================

  const handleNotification = () => {

    Alert.alert(
      "Notifications",
      "No new notifications yet."
    );

  };


  // =========================
  // SEARCH
  // =========================

  const handleSearch = () => {

    Alert.alert(
      "Search",
      "Search feature coming soon."
    );

  };


  // =========================
  // CREATE POST
  // =========================

  const handleCreatePost = () => {

    Alert.alert(
      "Create Post",
      "Create post feature coming soon."
    );

  };


  // =========================
  // MENU ACTION
  // =========================

  const handleMenuItem = (
    action: string
  ) => {

    // Go to saved posts
    if (action === "bookmarks") {

      setMenuOpen(false);

      router.push(
        "/(tabs)/saved"
      );

      return;
    }


    // CBT
    if (action === "cbt") {

      setMenuOpen(false);

      Alert.alert(
        "CBT Practice",
        "CBT practice feature coming soon."
      );

      return;
    }


    // School Portal
    if (action === "portal") {

      setMenuOpen(false);

      Alert.alert(
        "School Portal",
        "School portal feature coming soon."
      );

      return;
    }


    setMenuOpen(false);


    Alert.alert(
      "CampusHub",
      "This feature is coming soon."
    );

  };


  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {

    setMenuOpen(false);

    router.replace("/");

  };


  // =========================
  // MAIN SCREEN
  // =========================

  return (

    <View style={styles.screen}>


      {/* ================================= */}
      {/* SIDE MENU */}
      {/* ================================= */}

      <Modal

        visible={menuOpen}

        transparent={true}

        animationType="fade"

        statusBarTranslucent={true}

        onRequestClose={() =>
          setMenuOpen(false)
        }

      >

        <View
          style={
            styles.modalContainer
          }
        >


          {/* DRAWER */}

          <View
            style={
              styles.drawer
            }
          >

            <ScrollView

              showsVerticalScrollIndicator={
                false
              }

              contentContainerStyle={
                styles.drawerContent
              }

            >


              {/* ========================= */}
              {/* PROFILE SECTION */}
              {/* ========================= */}

              <View
                style={
                  styles.profileSection
                }
              >


                {/* CLOSE BUTTON */}

                <TouchableOpacity

                  style={
                    styles.closeButton
                  }

                  onPress={() =>
                    setMenuOpen(false)
                  }

                >

                  <Ionicons

                    name="close"

                    size={27}

                    color="#FFFFFF"

                  />

                </TouchableOpacity>



                <View
                  style={
                    styles.profileTop
                  }
                >


                  {/* ========================= */}
                  {/* PROFILE PICTURE */}
                  {/* ========================= */}

                  <TouchableOpacity

                    style={
                      styles.drawerProfileImageContainer
                    }

                    onPress={
                      pickProfileImage
                    }

                    activeOpacity={0.8}

                  >


                    <Image

                      source={

                        profileImage

                          ? {
                              uri:
                                profileImage,
                            }

                          : require(
                              "../../../assets/images/campushub-logo.png"
                            )

                      }

                      style={
                        styles.drawerProfileImage
                      }

                      resizeMode="cover"

                    />


                    {/* CAMERA ICON */}

                    <View
                      style={
                        styles.cameraButton
                      }
                    >

                      <Ionicons

                        name="camera"

                        size={15}

                        color="#FFFFFF"

                      />

                    </View>


                  </TouchableOpacity>



                  {/* STUDENT NAME */}

                  <View
                    style={
                      styles.profileDetails
                    }
                  >

                    <Text style={styles.profileName}>
  {studentName}
</Text>

                    <Text style={styles.profileUsername}>
  {username}
</Text>
<TouchableOpacity
  style={styles.editProfileButton}
  onPress={() => {
    setMenuOpen(false);
    setEditProfileOpen(true);
  }}
>

  <Ionicons
    name="pencil-outline"
    size={15}
    color="#FFFFFF"
  />

  <Text style={styles.editProfileText}>
    Edit Profile
  </Text>

</TouchableOpacity>

                  </View>


                </View>



              



                {/* STUDENT INFORMATION */}

                <View
                  style={
                    styles.studentInfoRow
                  }
                >


                  <View
                    style={
                      styles.studentInfoBox
                    }
                  >

                    <Text style={styles.studentInfoText}>
  {level} • {semester}
</Text>
                  </View>



                  <View
                    style={
                      styles.studentInfoBox
                    }
                  >

                    <Ionicons

                      name="school"

                      size={17}

                      color="#FFFFFF"

                    />


                    <Text style={styles.cgpaText}>
  CGPA: {cgpa}
</Text>

                  </View>


                </View>


              </View>



              {/* ========================= */}
              {/* MENU ITEMS */}
              {/* ========================= */}

              <View
                style={
                  styles.menuSection
                }
              >


                {menuItems.map(
                  (item) => (

                    <TouchableOpacity

                      key={
                        item.name
                      }

                      style={
                        styles.menuItem
                      }

                      onPress={() =>
                        handleMenuItem(
                          item.action
                        )
                      }

                    >


                      <Ionicons

                        name={
                          item.icon
                        }

                        size={25}

                        color="#159447"

                      />


                      <Text
                        style={
                          styles.menuItemText
                        }
                      >

                        {item.name}

                      </Text>


                      <Ionicons

                        name="chevron-forward-outline"

                        size={19}

                        color="#BBBBBB"

                      />


                    </TouchableOpacity>

                  )
                )}



                {/* LOGOUT */}

                <TouchableOpacity

                  style={[
                    styles.menuItem,
                    styles.logoutItem,
                  ]}

                  onPress={
                    handleLogout
                  }

                >

                  <Ionicons

                    name="log-out-outline"

                    size={25}

                    color="#D32F2F"

                  />


                  <Text
                    style={
                      styles.logoutText
                    }
                  >

                    Logout

                  </Text>


                </TouchableOpacity>


              </View>



              <Text
                style={
                  styles.versionText
                }
              >

                CampusHub Version 1.0.0

              </Text>


            </ScrollView>

          </View>



          {/* DARK BACKGROUND */}

          <TouchableOpacity

            style={
              styles.backdrop
            }

            activeOpacity={1}

            onPress={() =>
              setMenuOpen(false)
            }

          />


        </View>

      </Modal>



      {/* ================================= */}
      {/* COMMUNITY HEADER */}
      {/* ================================= */}

      <View
        style={
          styles.header
        }
      >


        {/* PROFILE PICTURE IN HEADER */}

        <TouchableOpacity

          onPress={() =>
            setMenuOpen(true)
          }

          activeOpacity={0.7}

        >


          <Image

            source={

              profileImage

                ? {
                    uri:
                      profileImage,
                  }

                : require(
                    "../../../assets/images/campushub-logo.png"
                  )

            }

            style={
              styles.profileImage
            }

            resizeMode="cover"

          />


        </TouchableOpacity>



        <Text
          style={
            styles.headerTitle
          }
        >

          Community

        </Text>



        <View
          style={
            styles.headerActions
          }
        >


          {/* NOTIFICATION */}

          <TouchableOpacity

            style={
              styles.headerButton
            }

            onPress={
              handleNotification
            }

          >

            <Ionicons

              name="notifications-outline"

              size={24}

              color="#222222"

            />

          </TouchableOpacity>



          {/* SEARCH */}

          <TouchableOpacity

            onPress={
              handleSearch
            }

          >

            <Ionicons

              name="search-outline"

              size={24}

              color="#222222"

            />

          </TouchableOpacity>


        </View>


      </View>



      {/* ================================= */}
      {/* COMMUNITY POSTS */}
      {/* ================================= */}

      <ScrollView

        showsVerticalScrollIndicator={
          false
        }

        contentContainerStyle={
          styles.feed
        }

      >


        {posts.map(
          (post) => (

            <View

              key={
                post.id
              }

              style={
                styles.post
              }

            >


              {/* POST HEADER */}

              <View
                style={
                  styles.postHeader
                }
              >


                <View
                  style={
                    styles.avatar
                  }
                >

                  <Text
                    style={
                      styles.avatarText
                    }
                  >

                    CH

                  </Text>

                </View>



                <View
                  style={
                    styles.userDetails
                  }
                >

                  <Text
                    style={
                      styles.username
                    }
                  >

                    CampusHub

                  </Text>


                  <Text
                    style={
                      styles.time
                    }
                  >

                    {post.time}

                  </Text>

                </View>



                <TouchableOpacity>

                  <Ionicons

                    name="ellipsis-horizontal"

                    size={22}

                    color="#777777"

                  />

                </TouchableOpacity>


              </View>



              {/* POST TITLE */}

              <Text
                style={
                  styles.postTitle
                }
              >

                {post.title}

              </Text>



              {/* POST TEXT */}

              <Text
                style={
                  styles.postText
                }
              >

                {post.description}

              </Text>



              <TouchableOpacity>

                <Text
                  style={
                    styles.seeMore
                  }
                >

                  See more

                </Text>

              </TouchableOpacity>



              {/* OPTIONAL IMAGE */}

              {post.hasImage && (

                <View
                  style={
                    styles.postImageContainer
                  }
                >


                  <Image

                    source={require(
                      "../../../assets/images/campushub-logo.png"
                    )}

                    style={
                      styles.postImage
                    }

                    resizeMode="contain"

                  />


                  <Text
                    style={
                      styles.imageText
                    }
                  >

                    CampusHub

                  </Text>


                </View>

              )}



              {/* ========================= */}
              {/* REACTIONS */}
              {/* ========================= */}

              <View
                style={
                  styles.reactions
                }
              >


                {/* COMMENTS */}

                <TouchableOpacity
                  style={
                    styles.reaction
                  }
                >

                  <Ionicons

                    name="chatbubble-outline"

                    size={20}

                    color="#555555"

                  />


                  <Text
                    style={
                      styles.reactionText
                    }
                  >

                    {post.comments}

                  </Text>

                </TouchableOpacity>



                {/* REPOST */}

                <TouchableOpacity
                  style={
                    styles.reaction
                  }
                >

                  <Ionicons

                    name="repeat-outline"

                    size={22}

                    color="#555555"

                  />


                  <Text
                    style={
                      styles.reactionText
                    }
                  >

                    {post.reposts}

                  </Text>

                </TouchableOpacity>



                {/* LIKE */}

                <TouchableOpacity
                  style={
                    styles.reaction
                  }
                >

                  <Ionicons

                    name="heart-outline"

                    size={22}

                    color="#555555"

                  />


                  <Text
                    style={
                      styles.reactionText
                    }
                  >

                    {post.likes}

                  </Text>

                </TouchableOpacity>



                {/* BOOKMARK */}

                <TouchableOpacity

                  onPress={() =>
                    toggleSavedPost(
                      post
                    )
                  }

                >

                  <Ionicons

                    name={
                      isSaved(
                        post.id
                      )

                        ? "bookmark"

                        : "bookmark-outline"
                    }

                    size={22}

                    color={
                      isSaved(
                        post.id
                      )

                        ? "#159447"

                        : "#555555"
                    }

                  />

                </TouchableOpacity>


              </View>


            </View>

          )
        )}


      </ScrollView>



      {/* ================================= */}
      {/* CREATE POST BUTTON */}
      {/* ================================= */}

      <TouchableOpacity

        style={
          styles.createButton
        }

        onPress={
          handleCreatePost
        }

        activeOpacity={0.8}

      >

        <Ionicons

          name="create-outline"

          size={27}

          color="#FFFFFF"

        />

      </TouchableOpacity>


    </View>

  );

}



// =================================
// STYLES
// =================================

const styles =
  StyleSheet.create({


    // MAIN SCREEN

    screen: {

      flex: 1,

      backgroundColor:
        "#F5F5F5",

    },



    // =========================
    // MODAL
    // =========================

    modalContainer: {

      flex: 1,

      flexDirection:
        "row",

    },


    drawer: {

      width: "82%",

      backgroundColor:
        "#FFFFFF",

      height: "100%",

    },


    drawerContent: {

      paddingBottom: 30,

    },


    backdrop: {

      flex: 1,

      backgroundColor:
        "rgba(0,0,0,0.55)",

    },



    // =========================
    // PROFILE
    // =========================

    profileSection: {

      backgroundColor:
        "#159447",

      paddingTop: 55,

      paddingHorizontal: 20,

      paddingBottom: 25,

    },


    closeButton: {

      position:
        "absolute",

      right: 15,

      top: 45,

      zIndex: 5,

    },


    profileTop: {

      flexDirection:
        "row",

      alignItems:
        "center",

    },


    // PROFILE IMAGE CONTAINER

    drawerProfileImageContainer: {

      width: 70,

      height: 70,

      borderRadius: 35,

      backgroundColor:
        "#FFFFFF",

      justifyContent:
        "center",

      alignItems:
        "center",

      position:
        "relative",

    },


    // PROFILE IMAGE

    drawerProfileImage: {

      width: 66,

      height: 66,

      borderRadius: 33,

    },


    // CAMERA BUTTON

    cameraButton: {

      position:
        "absolute",

      right: -2,

      bottom: -2,

      width: 26,

      height: 26,

      borderRadius: 13,

      backgroundColor:
        "#0B6E35",

      justifyContent:
        "center",

      alignItems:
        "center",

      borderWidth: 2,

      borderColor:
        "#FFFFFF",

    },


    profileDetails: {

      marginLeft: 15,

    },


    profileName: {

      color:
        "#FFFFFF",

      fontSize: 19,

      fontWeight:
        "bold",

    },


    profileUsername: {

      color:
        "#DDF3E5",

      fontSize: 13,

      marginTop: 5,

    },


    schoolName: {

      color:
        "#EAF7EF",

      marginTop: 20,

      fontSize: 14,

    },


    studentInfoRow: {

      flexDirection:
        "row",

      marginTop: 15,

    },


    studentInfoBox: {

      backgroundColor:
        "rgba(255,255,255,0.16)",

      paddingVertical: 9,

      paddingHorizontal: 12,

      borderRadius: 10,

      marginRight: 10,

      flexDirection:
        "row",

      alignItems:
        "center",

    },


    studentInfoText: {

      color:
        "#FFFFFF",

      fontSize: 12,

      fontWeight:
        "600",

    },


    cgpaText: {

      color:
        "#FFFFFF",

      fontSize: 12,

      fontWeight:
        "bold",

      marginLeft: 5,

    },



    // =========================
    // SIDE MENU
    // =========================

    menuSection: {

      paddingVertical: 10,

    },


    menuItem: {

      flexDirection:
        "row",

      alignItems:
        "center",

      paddingHorizontal: 22,

      paddingVertical: 16,

    },


    menuItemText: {

      flex: 1,

      marginLeft: 20,

      fontSize: 16,

      color:
        "#333333",

    },


    logoutItem: {

      marginTop: 10,

      borderTopWidth: 1,

      borderTopColor:
        "#EEEEEE",

    },


    logoutText: {

      marginLeft: 20,

      color:
        "#D32F2F",

      fontSize: 16,

      fontWeight:
        "600",

    },


    versionText: {

      textAlign:
        "center",

      color:
        "#999999",

      marginTop: 20,

      fontSize: 12,

    },



    // =========================
    // HEADER
    // =========================

    header: {

      backgroundColor:
        "#FFFFFF",

      paddingTop: 45,

      paddingBottom: 15,

      paddingHorizontal: 18,

      flexDirection:
        "row",

      alignItems:
        "center",

      borderBottomWidth: 1,

      borderBottomColor:
        "#EEEEEE",

    },


    // HEADER PROFILE PICTURE

    profileImage: {

      width: 42,

      height: 42,

      borderRadius: 21,

      backgroundColor:
        "#EEEEEE",

    },


    headerTitle: {

      flex: 1,

      fontSize: 25,

      fontWeight:
        "bold",

      marginLeft: 15,

      color:
        "#222222",

    },


    headerActions: {

      flexDirection:
        "row",

      alignItems:
        "center",

    },


    headerButton: {

      marginRight: 18,

    },



    // =========================
    // COMMUNITY FEED
    // =========================

    feed: {

      paddingBottom: 110,

    },


    post: {

      backgroundColor:
        "#FFFFFF",

      padding: 18,

      marginBottom: 10,

    },


    postHeader: {

      flexDirection:
        "row",

      alignItems:
        "center",

    },


    avatar: {

      width: 45,

      height: 45,

      borderRadius: 23,

      backgroundColor:
        "#159447",

      justifyContent:
        "center",

      alignItems:
        "center",

    },


    avatarText: {

      color:
        "#FFFFFF",

      fontWeight:
        "bold",

    },


    userDetails: {

      flex: 1,

      marginLeft: 12,

    },


    username: {

      fontSize: 16,

      fontWeight:
        "bold",

      color:
        "#222222",

    },


    time: {

      fontSize: 12,

      color:
        "#888888",

      marginTop: 2,

    },


    postTitle: {

      marginTop: 20,

      marginBottom: 8,

      fontSize: 18,

      fontWeight:
        "bold",

      color:
        "#222222",

    },


    postText: {

      fontSize: 15,

      lineHeight: 23,

      color:
        "#444444",

      marginBottom: 12,

    },


    seeMore: {

      color:
        "#159447",

      fontWeight:
        "bold",

      fontSize: 15,

    },



    // =========================
    // POST IMAGE
    // =========================

    postImageContainer: {

      height: 220,

      backgroundColor:
        "#EAF7EF",

      borderRadius: 12,

      justifyContent:
        "center",

      alignItems:
        "center",

      marginTop: 15,

    },


    postImage: {

      width: 140,

      height: 140,

    },


    imageText: {

      fontSize: 20,

      fontWeight:
        "bold",

      color:
        "#159447",

    },



    // =========================
    // REACTIONS
    // =========================

    reactions: {

      marginTop: 20,

      flexDirection:
        "row",

      alignItems:
        "center",

      justifyContent:
        "space-between",

    },


    reaction: {

      flexDirection:
        "row",

      alignItems:
        "center",

    },


    reactionText: {

      marginLeft: 5,

      color:
        "#555555",

      fontSize: 13,

    },



    // =========================
    // CREATE BUTTON
    // =========================

    createButton: {

      position:
        "absolute",

      right: 20,

      bottom: 85,

      width: 58,

      height: 58,

      borderRadius: 29,

      backgroundColor:
        "#159447",

      justifyContent:
        "center",

      alignItems:
        "center",

      elevation: 6,

    },

  });