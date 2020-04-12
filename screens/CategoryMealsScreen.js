import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const cat_id = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === cat_id);

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Button 
        title="Meal Detail" 
        onPress={() => { 
          props.navigation.navigate({
            routeName: "MealDetail"
          })
        }} 
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const cat_id = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === cat_id);

  return {
    headerTitle: `Resep Olahan ${selectedCategory.title}`
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default CategoryMealsScreen;