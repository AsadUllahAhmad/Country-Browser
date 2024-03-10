import React, { useEffect, useState } from "react";
import {Formik, Field} from 'formik';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import * as yup from 'yup';
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

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

   // Function to clear email and password fields
   const clearFields = () => {
    setEmail("");
    setPassword("");
    // Reset Formik form
  formik.resetForm();
  };

  // Clear fields when component is focused
  useFocusEffect(
    React.useCallback(() => {
      clearFields();
    }, [])
  );


// useEffect(() =>{
//   const unsubscribe = auth.onAuthStateChanged(user =>{
//     if(user){
//       navigation.navigate('Home');
//     }
//   })
//   return unsubscribe
// },[])

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

  const handleSignIn = (values) => {
    const { email, password } = values;
    // // Check if email and password are not empty
    //   if (!email) {
    //    Alert.alert('Error', 'Please enter your email.');
    //     return;
    //   }

    //   if (!password) {
    //     Alert.alert('Error', 'Please enter your password.');
    //     return;
    //   }

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // You can navigate or perform any other action here upon successful login
      navigation.navigate('Home');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
        // If user not found or wrong password, show an alert with 'Invalid credentials' message
        Alert.alert('Error', 'Invalid credentials.');
    } else {
        // For other errors, you can handle differently or show a generic error message
        Alert.alert('Error', errorMessage);
    }
    });
};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Formik
          initialValues={{ email: '', password: '' }}npx 
          onSubmit={(values) => handleSignIn(values)}
          validationSchema={validationSchema} // Define your validation schema here
          innerRef={formikRef => (formik = formikRef)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
              <View style={styles.inputContainer}>
                <Field
                  component={TextInput}
                  name="email"
                  placeholder="Email"
                  style = {[styles.input, { width: 300 }]}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                <Field
                  component={TextInput}
                  name="password"
                  placeholder="Password"
                  style = {[styles.input, { width: 300 }]}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                  keyboardType="numeric"
                />
                {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, {width: 250}]} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

          <Text style={styles.signUpText} onPress={() => {navigation.navigate('SignUpScreen')}}>Don't have an account? Sign Up</Text>
         
              </View>
            </View>
          )}
        </Formik>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

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
    paddingHorizontal: 30,
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
    color: 'white',
    paddingHorizontal: 25,
  }
});
