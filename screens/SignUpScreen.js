import React, { useState, useRef } from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { color } from "../assets/color/colors";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
} from "react-native";
import { firebaseConfig, auth } from "../config/firebase";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const formikRef = useRef(null);

  // Function to clear email and password fields
  const clearFields = () => {
    setEmail("");
    setPassword("");
    // Reset Formik form
    if (formikRef.current) {
      formikRef.current.resetForm();
    }
  };

  // Clear fields when component is focused
  useFocusEffect(
    React.useCallback(() => {
      clearFields();
    }, [])
  );

  const handleSignUp = (values) => {
    const { email, password } = values;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        ToastAndroid.show("Account created successfully!", ToastAndroid.SHORT);
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === "auth/email-already-in-use") {
          ToastAndroid.show(
            "The email address is already in use by another account.",
            ToastAndroid.SHORT
          );
        } else {
          // Handle other errors
          ToastAndroid.show(
            "The email address is already in use by another account.",
            ToastAndroid.SHORT
          );
        }
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => handleSignUp(values)}
          validationSchema={validationSchema}
          innerRef={formikRef}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <View style={styles.inputContainer}>
                <Field
                  component={TextInput}
                  name="email"
                  placeholder="Email"
                  style={[styles.input, { width: 300 }]}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <Field
                  component={TextInput}
                  name="password"
                  placeholder="Password"
                  style={[styles.input, { width: 300 }]}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                  keyboardType="numeric"
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, { width: 250 }]}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <Text
                  style={styles.signInText}
                  onPress={() => {
                    navigation.navigate("LoginScreen");
                  }}
                >
                  Already have an account? Sign In
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.black_grey_222,
  },
  inputContainer: {
    width: "80%",
    borderColor: color.drak_black_000000,
  },
  input: {
    backgroundColor: color.grey_808080,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    paddingHorizontal: 30,
    marginTop: 40,
  },
  button: {
    backgroundColor: color.grey_808080,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderColor: color.drak_black_000000,
  },
  buttonText: {
    color: color.drak_black_000000,
    fontWeight: "700",
    fontSize: 16,
  },
  signInText: {
    marginTop: 10,
    color: color.white_FFFFFF,
    paddingHorizontal: 20,
  },
  errorText: {
    color: color.red_FF0000,
  },
});
