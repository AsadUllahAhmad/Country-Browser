import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { color } from "../color/colors";

const Cardlayout = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.shadowContainer}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.country}</Text>
        <Text style={[styles.text, styles.textWithMarginTop]}>
          {item.population}
        </Text>
        <Text style={styles.text}>Region: {item.region}</Text>
        <Text style={styles.text}>Capital: {item.capital}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: color.drak_black_000000,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 20,
    margin: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: color.drak_black_000000,
    borderRadius: 8,
    margin: 16,
    width: 250,
  },
  image: {
    width: 250,
    height: 200,
    marginBottom: 16,
    resizeMode: "cover",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
    color: color.white_FFFFFF,
    textAlign: "left",
    marginLeft: 20,
  },
  textWithMarginTop: {
    marginTop: 12,
  },
});

export default Cardlayout;
