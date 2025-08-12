import {createContext, useContext, useState} from "react";

const FavoritesContext = createContext({})

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    const addFavorite = (recipe) => {
        setFavorites((prev) => [...prev, recipe])
    }

    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter((item) => item.id !== id))
    }

    return(
        <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorites = () => useContext(FavoritesContext)