import { View, Text, Image, StyleSheet } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Loading() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)/community");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/campushub-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.appName}>CampusHub</Text>

      <Text style={styles.tagline}>
        Your campus, all in one place
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  logo: {
    width: 250,
    height: 250,
  },

  appName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#159447",
    marginTop: 10,
  },

  tagline: {
    fontSize: 15,
    color: "#777777",
    marginTop: 5,
  },
});