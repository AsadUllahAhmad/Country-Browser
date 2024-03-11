import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../config/firebase";
import { color } from "../assets/color/colors";
import Cardlayout from "../assets/cardcomponent/cardlayout";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  const data = [
    {
      id: 1,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 2,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 3,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 4,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 5,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 6,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 7,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 8,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 9,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 10,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 11,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 12,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 13,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 14,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 15,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 16,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 17,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 18,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 19,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 20,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 21,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 22,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 23,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 24,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 25,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 26,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 27,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 28,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 29,
      country: "Germany",
      population: "81891985",
      region: "Europe",
      capital: "Berlin",
      image: require("../assets/images/flag.png"),
    },
    {
      id: 30,
      country: "USA",
      population: "331002651",
      region: "North America",
      capital: "Washington, D.C.",
      image: require("../assets/images/flag.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text onPress={handleSignOut}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.countrylist}>
        <Cardlayout data={data} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: color.black_grey_222,
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
  // content: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  countrylist: {
    marginTop: 150,
  },
});
