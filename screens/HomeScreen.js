import React from 'react'
import { Text, StyleSheet, View } from 'react-native'; 

const HomeScreen = () => {

    return (
      <View style={styles.text}>
        <Text>Home Screen</Text>
      </View>
    )
  }


  export default HomeScreen;
  
const styles = StyleSheet.create({
  text:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  }
})


