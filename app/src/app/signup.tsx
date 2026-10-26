import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

import { useState } from "react";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignUp() {
  // FORM STATES
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [matricNumber, setMatricNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // PASSWORD VISIBILITY STATES
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  // FORM VALIDATION
  const validateForm = () => {
    if (
      !fullName ||
      !email ||
      !matricNumber ||
      !department ||
      !level ||
      !password ||
      !confirmPassword
    ) {
      Alert.alert(
        "Incomplete Form",
        "Please fill in all fields."
      );

      return false;
    }

    if (!email.includes("@")) {
      Alert.alert(
        "Invalid Email",
        "Please enter a valid email address."
      );

      return false;
    }

    if (password.length < 6) {
      Alert.alert(
        "Invalid Password",
        "Password must contain at least 6 characters."
      );

      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        "Password Error",
        "Your passwords do not match."
      );

      return false;
    }

    return true;
  };

  // SIGN UP FUNCTION
  const handleSignUp = () => {
    if (validateForm()) {
      Alert.alert(
        "Success",
        "Account created successfully!"
      );

      router.replace("/");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={
        Platform.OS === "ios" ? "padding" : "height"
      }
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>

          {/* CAMPUSHUB LOGO */}
          <Image
            source={require("../../assets/images/campushub-logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* TITLE */}
          <Text style={styles.title}>
            Create Account
          </Text>

          <Text style={styles.subtitle}>
            Join CampusHub and stay connected
          </Text>

          {/* FULL NAME */}
          <Text style={styles.label}>
            Full Name
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="person-outline"
              size={21}
              color="#777"
            />

            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* EMAIL */}
          <Text style={styles.label}>
            Email
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={21}
              color="#777"
            />

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* MATRIC NUMBER */}
          <Text style={styles.label}>
            Matric Number
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="school-outline"
              size={21}
              color="#777"
            />

            <TextInput
              style={styles.input}
              placeholder="Enter your matric number"
              autoCapitalize="characters"
              value={matricNumber}
              onChangeText={setMatricNumber}
            />
          </View>

          {/* DEPARTMENT */}
          <Text style={styles.label}>
            Department
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="business-outline"
              size={21}
              color="#777"
            />

            <TextInput
              style={styles.input}
              placeholder="Enter your department"
              value={department}
              onChangeText={setDepartment}
            />
          </View>

          {/* LEVEL */}
          <Text style={styles.label}>
            Level
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="layers-outline"
              size={21}
              color="#777"
            />

            <TextInput
              style={styles.input}
              placeholder="e.g. 300 Level"
              value={level}
              onChangeText={setLevel}
            />
          </View>

          {/* PASSWORD */}
          <Text style={styles.label}>
            Password
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={21}
              color="#777"
            />

            <TextInput
              style={styles.input}
              placeholder="Create your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />

            <TouchableOpacity
              onPress={() =>
                setShowPassword(!showPassword)
              }
            >
              <Ionicons
                name={
                  showPassword
                    ? "eye-outline"
                    : "eye-off-outline"
                }
                size={22}
                color="#777"
              />
            </TouchableOpacity>
          </View>

          {/* CONFIRM PASSWORD */}
          <Text style={styles.label}>
            Confirm Password
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={21}
              color="#777"
            />

            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />

            <TouchableOpacity
              onPress={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >
              <Ionicons
                name={
                  showConfirmPassword
                    ? "eye-outline"
                    : "eye-off-outline"
                }
                size={22}
                color="#777"
              />
            </TouchableOpacity>
          </View>

          {/* SIGN UP BUTTON */}
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleSignUp}
            activeOpacity={0.7}
          >
            <Text style={styles.signUpButtonText}>
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* LOGIN LINK */}
          <View style={styles.loginRow}>
            <Text style={styles.loginText}>
              Already have an account?{" "}
            </Text>

            <TouchableOpacity
              onPress={() => router.replace("/")}
            >
              <Text style={styles.loginLink}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

          {/* OR CONTINUE WITH */}
          <View style={styles.orContainer}>
            <View style={styles.line} />

            <Text style={styles.orText}>
              Or continue with
            </Text>

            <View style={styles.line} />
          </View>

          {/* SOCIAL ICONS */}
          <View style={styles.socialIcons}>

            <TouchableOpacity
              style={styles.socialButton}
            >
              <Ionicons
                name="logo-facebook"
                size={32}
                color="#1877F2"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
            >
              <Ionicons
                name="logo-google"
                size={32}
                color="#DB4437"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
            >
              <Ionicons
                name="logo-apple"
                size={32}
                color="#000000"
              />
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
    paddingHorizontal: 30,
    paddingTop: 35,
    paddingBottom: 50,
  },

  logo: {
    width: 140,
    height: 140,
    alignSelf: "center",
    marginBottom: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#222222",
  },

  subtitle: {
    textAlign: "center",
    color: "#777777",
    fontSize: 15,
    marginTop: 7,
    marginBottom: 30,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 8,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    paddingHorizontal: 13,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },

  input: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
    fontSize: 15,
    color: "#222222",
  },

  signUpButton: {
    backgroundColor: "#159447",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },

  signUpButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  loginText: {
    color: "#777777",
    fontSize: 14,
  },

  loginLink: {
    color: "#159447",
    fontWeight: "bold",
    fontSize: 14,
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#DDDDDD",
  },

  orText: {
    marginHorizontal: 12,
    color: "#777777",
    fontSize: 13,
  },

  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 22,
  },

  socialButton: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});