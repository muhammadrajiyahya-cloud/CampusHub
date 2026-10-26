import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

export default function Home() {

  // Functions
  const handleNotification = () => {
    Alert.alert("Notifications", "No new notifications yet.");
  };

  const handleSearch = () => {
    Alert.alert("Search", "Search feature coming soon.");
  };

  const handleCreatePost = () => {
    Alert.alert("Create Post", "Create post feature coming soon.");
  };

  return (
    <View style={styles.screen}>

      {/* HEADER */}
      <View style={styles.header}>

        <Image
          source={require("../../assets/images/campushub-logo.png")}
          style={styles.profileImage}
        />

        <Text style={styles.headerTitle}>
          Community
        </Text>

        <View style={styles.headerActions}>

          <TouchableOpacity
            onPress={handleNotification}
            style={styles.headerButton}
          >
            <Text style={styles.headerIcon}>🔔</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSearch}>
            <Text style={styles.headerIcon}>🔍</Text>
          </TouchableOpacity>

        </View>

      </View>


      {/* COMMUNITY FEED */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feed}
      >

        {/* FIRST POST */}
        <View style={styles.post}>

          <View style={styles.postHeader}>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>CH</Text>
            </View>

            <View style={styles.userDetails}>
              <Text style={styles.username}>
                CampusHub
              </Text>

              <Text style={styles.time}>
                2 hours ago
              </Text>
            </View>

            <Text style={styles.menu}>•••</Text>

          </View>


          <Text style={styles.postTitle}>
            EXAM TIPS FOR DUAP STUDENTS
          </Text>

          <Text style={styles.postText}>
            1. Pay attention to every part of your course outline.
            Every topic is important and may appear in your examination.

            -Mr. Amao Habeeb
          </Text>

          <Text style={styles.postText}>
            2. Start reading early. Avoid waiting until examination
            week before preparing for your courses.

            -Dr. Thanni 
          </Text>

          <TouchableOpacity>
            <Text style={styles.seeMore}>
              See more
            </Text>
          </TouchableOpacity>


          {/* REACTIONS */}
          <View style={styles.reactions}>

            <TouchableOpacity style={styles.reaction}>
              <Text>💬</Text>
              <Text style={styles.reactionText}>11</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.reaction}>
              <Text>🔁</Text>
              <Text style={styles.reactionText}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.reaction}>
              <Text>♡</Text>
              <Text style={styles.reactionText}>31</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.reactionIcon}>🔖</Text>
            </TouchableOpacity>

          </View>

        </View>


        {/* SECOND POST */}
        <View style={styles.post}>

          <View style={styles.postHeader}>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>CH</Text>
            </View>

            <View style={styles.userDetails}>
              <Text style={styles.username}>
                CampusHub
              </Text>

              <Text style={styles.time}>
                Yesterday
              </Text>
            </View>

            <Text style={styles.menu}>•••</Text>

          </View>


          <Text style={styles.postTitle}>
            🔥 CAMPUS UPDATE
          </Text>

          <Text style={styles.postText}>
            Welcome to CampusHub, your student companion for academic
            updates, lecture information, course materials and
            assessments.
          </Text>


          {/* IMAGE AREA */}
          <View style={styles.postImageContainer}>

            <Image
              source={require("../../assets/images/campushub-logo.png")}
              style={styles.postImage}
              resizeMode="contain"
            />

            <Text style={styles.imageText}>
              CampusHub
            </Text>

          </View>


          <View style={styles.reactions}>

            <TouchableOpacity style={styles.reaction}>
              <Text>💬</Text>
              <Text style={styles.reactionText}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.reaction}>
              <Text>🔁</Text>
              <Text style={styles.reactionText}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.reaction}>
              <Text>♡</Text>
              <Text style={styles.reactionText}>19</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.reactionIcon}>🔖</Text>
            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>


      {/* CREATE POST BUTTON */}
      <TouchableOpacity
        style={styles.createButton}
        onPress={handleCreatePost}
        activeOpacity={0.8}
      >
        <Text style={styles.createButtonText}>
          ✏️
        </Text>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: "#F5F5F5",
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
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
    color: "#222222",
  },

  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerButton: {
    marginRight: 18,
  },

  headerIcon: {
    fontSize: 22,
  },


  // FEED

  feed: {
    paddingBottom: 100,
  },


  // POST

  post: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    marginBottom: 10,
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,

    backgroundColor: "#159447",

    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  userDetails: {
    flex: 1,
    marginLeft: 12,
  },

  username: {
    fontSize: 16,
    fontWeight: "bold",
  },

  time: {
    color: "#888888",
    fontSize: 12,
    marginTop: 2,
  },

  menu: {
    fontSize: 20,
    color: "#777777",
  },

  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
  },

  postText: {
    fontSize: 15,
    lineHeight: 23,
    color: "#444444",
    marginBottom: 12,
  },

  seeMore: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#159447",
  },


  // REACTIONS

  reactions: {
    marginTop: 20,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  reaction: {
    flexDirection: "row",
    alignItems: "center",
  },

  reactionText: {
    marginLeft: 5,
    color: "#555555",
  },

  reactionIcon: {
    fontSize: 19,
  },


  // IMAGE POST

  postImageContainer: {
    height: 220,

    backgroundColor: "#EAF7EF",
    borderRadius: 12,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 10,
  },

  postImage: {
    width: 140,
    height: 140,
  },

  imageText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#159447",
  },


  // FLOATING BUTTON

  createButton: {
    position: "absolute",

    right: 20,
    bottom: 25,

    width: 58,
    height: 58,
    borderRadius: 29,

    backgroundColor: "#159447",

    justifyContent: "center",
    alignItems: "center",

    elevation: 6,
  },

  createButtonText: {
    fontSize: 25,
  },

});