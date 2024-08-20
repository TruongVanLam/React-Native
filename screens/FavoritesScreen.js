import { useContext, useEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
// import { FavoritesContext } from "../store/context/favorites-context";
import {
  addFavorite,
  removeFavorite,
  favorites,
} from "../store/redux/favorites";

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);

  // const favoriteMealIds = useSelector((state) => state.favorites.ids);
  // const _favorites = useSelector(favorites);
  const { ids } = useSelector(favorites);

  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealsCtx.ids.includes(meal.id)
    // favoriteMealIds.includes(meal.id)
    // _favorites.ids.includes(meal.id)
    ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
