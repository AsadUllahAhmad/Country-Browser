import React, { useEffect, useState } from "react";
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
  Alert,
} from "react-native";
import { firebaseConfig, auth } from '../config/firebase';
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

   // Function to clear email and password fields
   const clearFields = () => {
    setEmail("");
    setPassword("");
  };

  // Clear fields when component is focused
  useFocusEffect(
    React.useCallback(() => {
      clearFields();
    }, [])
  );


useEffect(() =>{
  const unsubscribe = auth.onAuthStateChanged(user =>{
    if(user){
      navigation.navigate('Home');
    }
  })
  return unsubscribe
},[])

  const handleSignUp = () => {
      // Check if email and password are not empty
  if (!email) {
    Alert.alert('Error', 'Please enter your email.');
    return;
  }

  if (!password) {
    Alert.alert('Error', 'Please enter your password.');
    return;
  }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        Alert.alert('Success', 'Account created successfully!');
        console.log(user.email);
      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />

          <TextInput
            placeholder="Passwoord"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            keyboardType="numeric"
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.signUpText} onPress={() => {navigation.navigate('LoginScreen')}}>Already have an account? Sign In</Text>

        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
  },
  inputContainer: {
    width: "80%",
    borderColor: 'black'
  },
  input: {
    backgroundColor: "grey",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    
  },
  button: {
    backgroundColor: "grey",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderColor: 'black',
  },
  buttonOutline: {
    backgroundColor: "grey",
    marginTop: 10,
    borderWidth: 2,
   
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },

  buttonOutlineText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },

  signUpText:{
    marginTop: 10,
    color: 'white'
  }
});
