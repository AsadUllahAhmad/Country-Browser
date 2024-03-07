import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, View, KeyboardAvoidingView,TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'; 

const SignUpScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}/>
            
            <TextInput
                placeholder="Passwoord"
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                keyboardType="numeric"
                secureTextEntry
                />  
           </View>

           <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

           </View>
         </KeyboardAvoidingView>
         </TouchableWithoutFeedback>
    );
  };

  export default SignUpScreen;


  // Header options for SignUpScreen
SignUpScreen.navigationOptions = {
    headerTitle: 'Sign Up',
    headerLeft: () => (
        <TouchableOpacity  style={styles.backbutton} onPress={() => navigation.goBack()}>
            <Text style={styles.headerBackButton}>Back</Text>
        </TouchableOpacity>
    ),
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
    },
    inputContainer:{
      width: '80%'
    },
    input:{
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
     buttonContainer:{
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
     button:{
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
     buttonOutline:{
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
     buttonText:{
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },

     buttonOutlineText:{
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    }, 
})


