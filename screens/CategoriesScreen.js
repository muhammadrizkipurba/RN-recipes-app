import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

import CategoryGridCard from '../components/CategoryGridCard';

const CategoriesScreen = props => {

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridCard 
        title={itemData.item.title}
        color={itemData.item.color}
        image={itemData.item.image}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList 
      keyExtractor={(item, idx) => `receipe-no-${idx+1}`}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Bahan Utama Masakan",
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default CategoriesScreen;
