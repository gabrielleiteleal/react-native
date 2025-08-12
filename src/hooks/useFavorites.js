import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "@favorites_recipes";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    try {
      const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
      if (jsonValue) {
        setFavorites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log("Erro ao carregar favoritos", e);
    }
  }

  async function toggleFavorite(recipe) {
    try {
      let updatedFavorites;

      if (favorites.some(fav => fav.id === recipe.id)) {
        updatedFavorites = favorites.filter(fav => fav.id !== recipe.id);
      } else {
        updatedFavorites = [...favorites, recipe];
      }

      setFavorites(updatedFavorites);
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    } catch (e) {
      console.log("Erro ao salvar favorito", e);
    }
  }

  function isFavorite(id) {
    return favorites.some(fav => fav.id === id);
  }

  return { favorites, toggleFavorite, isFavorite };
}
