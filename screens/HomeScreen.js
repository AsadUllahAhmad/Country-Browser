import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../config/firebase";
import { color } from "../assets/color/colors";
import Cardlayout from "../assets/cardcomponent/cardlayout";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Failed to fetch countries");
      }
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setIsLoading(false);
    }
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  const countryDetailScreen = () => {
    // Navigate to the new screen when a card is pressed
    navigation.navigate("CountryDetailScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoutButton}>
        <TouchableOpacity onPress={handleSignOut}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.countrylist}>
        {isLoading ? (
          <ActivityIndicator size="large" color={color.grey_808080} />
        ) : (
          <Cardlayout data={countries} 
           onPress={countryDetailScreen}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: color.black_grey_282f3c,
  },
  logoutButton: {
    width: "25%",
    height: "5%",
    position: "absolute",
    top: 60,
    right: 20,
    backgroundColor: color.grey_808080,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  countrylist: {
    marginTop: 150,
    flex: 1,
  },
});
