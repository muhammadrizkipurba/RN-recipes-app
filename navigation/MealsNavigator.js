import { createStackNavigator, createAppContainer } from 'react-navigation'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  // routeName: routeScreen
  Categories: {
    screen: CategoriesScreen
  },
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
}, {
  mode: 'card ',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: Colors.black
  }
});

export default createAppContainer(MealsNavigator);