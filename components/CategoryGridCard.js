import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, TouchableNativeFeedback } from "react-native";
import Colors from "../constants/Colors";

const CategoryGridCard = props => {
  let TouchableComp = TouchableOpacity;
  if(Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  } 
  return (
    <View
      style={styles.gridItem}
    >
      <TouchableComp style={{flex: 1}} onPress={props.onSelect}>
        <View style={{...styles.container,...{backgroundColor: props.color}}}>
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15
  },
  title: {
    fontFamily: "helvetica-bold",
    fontSize: 20,
    color: Colors.white,
    textAlign: 'right'
  }
});

export default CategoryGridCard;
