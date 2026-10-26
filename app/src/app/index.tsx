import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { router } from "expo-router";

export default function Index() {

  // This function runs when Login is pressed
  const handleLogin = () => {
    router.push("/loading");
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        <View style={styles.container}>

          {/* CampusHub Logo */}
          <Image
            source={require("../../assets/images/campushub-logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* Welcome Text */}
          <Text style={styles.welcome}>
            Welcome Back
          </Text>

          <Text style={styles.subtitle}>
            Login to continue to CampusHub
          </Text>


          {/* EMAIL */}

          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />


          {/* PASSWORD */}

          <Text style={styles.label}>
            Password
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
          />


          {/* FORGOT PASSWORD */}

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>
              Forgot Password?
            </Text>
          </TouchableOpacity>


          {/* LOGIN BUTTON */}

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            activeOpacity={0.7}
          >

            <Text style={styles.loginText}>
              Login
            </Text>

          </TouchableOpacity>


          {/* SIGN UP */}

          <View style={styles.signUpRow}>

            <Text style={styles.bottomText}>
              Don't have an account?{" "}
            </Text>

            <TouchableOpacity
              onPress={() => router.push("/signup")}
            >

              <Text style={styles.signUpText}>
                Sign Up
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>

    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({

  keyboardContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContainer: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 40,
  },

  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginBottom: 10,
  },

  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1B1B1B",
  },

  subtitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#777777",
    marginTop: 8,
    marginBottom: 35,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333333",
  },

  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },

  forgotPassword: {
    textAlign: "right",
    color: "#159447",
    fontWeight: "600",
    marginBottom: 25,
  },

  loginButton: {
    backgroundColor: "#159447",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  signUpRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  bottomText: {
    color: "#777777",
  },

  signUpText: {
    color: "#159447",
    fontWeight: "bold",
  },

});