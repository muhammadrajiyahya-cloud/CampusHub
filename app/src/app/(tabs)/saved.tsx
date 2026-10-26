import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import {
  useSavedPosts,
} from "../../context/SavedPostsContext";


export default function Saved() {

  const {
    savedPosts,
    toggleSavedPost,
  } = useSavedPosts();


  return (
    <View style={styles.screen}>

      {/* HEADER */}

      <View style={styles.header}>

        <Image
          source={require(
            "../../../assets/images/campushub-logo.png"
          )}
          style={styles.profileImage}
          resizeMode="contain"
        />

        <Text style={styles.headerTitle}>
          Saved
        </Text>

        <Ionicons
          name="bookmark-outline"
          size={25}
          color="#222222"
        />

      </View>


      {savedPosts.length > 0 ? (

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          <Text style={styles.sectionTitle}>
            Saved Posts
          </Text>


          {savedPosts.map((post) => (

            <View
              key={post.id}
              style={styles.postCard}
            >

              <View style={styles.postHeader}>

                <View style={styles.avatar}>

                  <Text style={styles.avatarText}>
                    CH
                  </Text>

                </View>


                <View style={styles.userInfo}>

                  <Text style={styles.username}>
                    CampusHub
                  </Text>

                  <Text style={styles.time}>
                    {post.time}
                  </Text>

                </View>


                <TouchableOpacity
                  onPress={() =>
                    toggleSavedPost(post)
                  }
                >

                  <Ionicons
                    name="bookmark"
                    size={23}
                    color="#159447"
                  />

                </TouchableOpacity>

              </View>


              <Text style={styles.postTitle}>
                {post.title}
              </Text>

              <Text style={styles.description}>
                {post.description}
              </Text>


              <View style={styles.actions}>

                <TouchableOpacity
                  style={styles.action}
                >

                  <Ionicons
                    name="chatbubble-outline"
                    size={20}
                    color="#555555"
                  />

                  <Text style={styles.actionText}>
                    Comment
                  </Text>

                </TouchableOpacity>


                <TouchableOpacity
                  style={styles.action}
                >

                  <Ionicons
                    name="heart-outline"
                    size={21}
                    color="#555555"
                  />

                  <Text style={styles.actionText}>
                    {post.likes}
                  </Text>

                </TouchableOpacity>


                <TouchableOpacity
                  style={styles.action}
                >

                  <Ionicons
                    name="share-social-outline"
                    size={21}
                    color="#555555"
                  />

                  <Text style={styles.actionText}>
                    Share
                  </Text>

                </TouchableOpacity>

              </View>

            </View>

          ))}

        </ScrollView>

      ) : (

        <View style={styles.emptyContainer}>

          <Ionicons
            name="bookmark-outline"
            size={75}
            color="#CCCCCC"
          />

          <Text style={styles.emptyTitle}>
            No Saved Posts
          </Text>

          <Text style={styles.emptyText}>
            Tap the bookmark icon on a Community
            post and it will appear here.
          </Text>

        </View>

      )}

    </View>
  );
}


const styles = StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

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

  scrollContent: {
    padding: 15,
    paddingBottom: 100,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",

    marginBottom: 15,

    color: "#333333",
  },

  postCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    padding: 17,

    marginBottom: 15,

    borderWidth: 1,
    borderColor: "#EEEEEE",

    elevation: 2,
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 43,
    height: 43,

    borderRadius: 22,

    backgroundColor: "#159447",

    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#FFFFFF",

    fontWeight: "bold",
  },

  userInfo: {
    flex: 1,

    marginLeft: 11,
  },

  username: {
    fontSize: 15,

    fontWeight: "bold",

    color: "#222222",
  },

  time: {
    fontSize: 12,

    color: "#888888",

    marginTop: 3,
  },

  postTitle: {
    marginTop: 18,

    fontSize: 17,

    fontWeight: "bold",

    color: "#222222",
  },

  description: {
    marginTop: 8,

    fontSize: 14,

    lineHeight: 21,

    color: "#555555",
  },

  actions: {
    marginTop: 20,

    paddingTop: 15,

    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",

    flexDirection: "row",

    justifyContent: "space-between",
  },

  action: {
    flexDirection: "row",
    alignItems: "center",
  },

  actionText: {
    marginLeft: 5,

    fontSize: 12,

    color: "#555555",
  },

  emptyContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 40,
  },

  emptyTitle: {
    marginTop: 17,

    fontSize: 22,
    fontWeight: "bold",

    color: "#555555",
  },

  emptyText: {
    marginTop: 8,

    color: "#888888",

    textAlign: "center",

    lineHeight: 21,
  },

});