import React, { useState } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView,TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard } from 'react-native'; 
import auth from '../firebase';

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp =() => {
        auth.createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
           const user = userCredentials.user;
           console.log(user.email);
        })
        
        .catch(error => alert(error.message));
    
    }


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
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={handleSignUp}>
              <Text style={styles.buttonOutlineText}>Sign Up</Text>
            </TouchableOpacity>

           </View>
         </KeyboardAvoidingView>
         </TouchableWithoutFeedback>
    );
  };

  export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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


