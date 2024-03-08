import React from 'react'
import { Text, StyleSheet, View , TouchableOpacity} from 'react-native'; 
import { useNavigation } from "@react-navigation/native";
import {auth } from '../config/firebase';

const HomeScreen = () => {

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.navigate('LoginScreen')
    })
    .catch(error => alert(error.message));
  }
  return (
    <View style={styles.container}>
       <View style={styles.logoutButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => {navigation.navigate('LoginScreen')}}>Logout</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.content}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#222",
   
  },
  logoutButton: {
    width: '15%',
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: 'grey',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    
  },

});

