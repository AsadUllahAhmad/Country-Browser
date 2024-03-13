import React from "react";
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { color } from "../color/colors";

const Cardlayout = ({ data, onPress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onPress(item)}>
    <View style={styles.shadowContainer}>
      <View style={styles.card}>
        <Image
          source={
            item.flags.png
              ? { uri: item.flags.png }
              : require("../images/flag.png")
          }
          style={styles.image}
        />
        <Text style={styles.text}>
          {item.name.common ? item.name.common : "Germany"}
        </Text>
        {item.population !== undefined ? (
          <Text style={[styles.text, styles.textWithMarginTop]}>
            Population: {item.population}
          </Text>
        ) : (
          <Text style={[styles.text, styles.textWithMarginTop]}>
            Population: 4475757575
          </Text>
        )}
        {item.region ? (
          <Text style={styles.text}>Region: {item.region}</Text>
        ) : (
          <Text style={styles.text}>Region: Berlin</Text>
        )}
        {item.capital ? (
          <Text style={styles.text}>Capital: {item.capital}</Text>
        ) : (
          <Text style={styles.text}>Capital: Europe</Text>
        )}
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) =>
        item && item.id ? item.id.toString() : index.toString()
      }
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
    backgroundColor: "#5b6469",
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
    fontWeight: 'bold'
  },
  textWithMarginTop: {
    marginTop: 12,
  },
});

export default Cardlayout;
