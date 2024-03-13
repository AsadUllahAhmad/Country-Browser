import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { color } from "../assets/color/colors";
import Icon from "react-native-vector-icons/Ionicons";

const CountryDetailScreen = ({ navigation }) => {
  const borderCountries = [
    "Germany",
    "France",
    "Netherlands",
    "Luxembourg",
    "Germany",
    "France",
    "Netherlands",
    "Luxembourg",
    "Germany",
    "France",
    "Netherlands",
    "Luxembourg",
    "Germany",
    "France",
    "Netherlands",
    "Luxembourg",
  ];

  const renderBorderCountry = ({ item }) => {
    return (
      <TouchableOpacity style={styles.borderCountryItem}>
        <Text style={styles.borderCountryText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <View style={styles.backContainer}>
          <Icon name="arrow-back" size={24} color={color.drak_black_000000} />
          <Text style={styles.backText}>Back</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/flag.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.textWithMarginTop]}>Belgium</Text>
          <Text style={styles.text}>NativeName: Berlin</Text>
          <Text style={styles.text}>Population: 123456789</Text>
          <Text style={styles.text}>Region: Europe</Text>
          <Text style={styles.text}>Sub Region: Western Europe</Text>
          <Text style={styles.text}>Capital: Brussel</Text>
          <Text style={[styles.text, styles.textWithMarginTop]}>
            Top level domain: .be
          </Text>
          <Text style={styles.text}>Currencies: Euro</Text>
          <Text style={styles.text}>Languages: English,German</Text>
          <Text style={[styles.text, styles.textWithMarginTop]}>
            Border Countries:
          </Text>
          <View style={styles.borderCountries}>
            <FlatList
              data={borderCountries}
              renderItem={renderBorderCountry}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: color.black_grey_282f3c,
  },
  content: {
    alignItems: "center",
    backgroundColor: color.black_212b34,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    marginVertical: 20,
    marginTop: 120,
  },
  text: {
    color: color.white_FFFFFF,
    fontSize: 24,
    marginVertical: 10,
  },
  textContainer: {
    alignSelf: "flex-start",
    marginLeft: 50,
  },
  backButton: {
    position: "absolute",
    top: 45,
    left: 20,
    zIndex: 1,
  },
  backContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.grey_808080,
    borderWidth: 1,
    borderColor: color.borderColor_1e2831,
    padding: 5,
  },
  backText: {
    color: color.drak_black_000000,
    fontSize: 18,
    marginLeft: 5,
  },
  borderCountries: {
    marginTop: 10,
    flexDirection: "row",
  },
  borderCountryItem: {
    backgroundColor: color.black_grey_282f3c,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.borderColor_1e2831,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  borderCountryText: {
    color: color.white_FFFFFF,
    fontSize: 16,
  },
  textWithMarginTop: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  boldText: {
    fontWeight: "bold",
    color: color.white_FFFFFF,
    fontSize: 20,
  },
});

export default CountryDetailScreen;
