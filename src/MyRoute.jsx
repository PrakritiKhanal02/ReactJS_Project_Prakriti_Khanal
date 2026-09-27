import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './pages/Layout'
import Homepage from './pages/Homepage'
import Recipeview from './pages/Recipeview'
import Favorites from './pages/Favorites'
import useLocalStorage from './hooks/useLocalStorage'

const MyRoute = () => {

    const [favorites, setFavorites] = useLocalStorage('favoriteRecipes', [])

    const addFavorite = (recipe) => {

        const alreadyExists = favorites.find(
            (item) => item.idMeal === recipe.idMeal
        )

        if (!alreadyExists) {

            const newFavorites = [
                ...favorites,
                recipe
            ]

            setFavorites(newFavorites)
        }
    }

    const removeFavorite = (recipe) => {

        const newFavorites = favorites.filter(
            (item) => item.idMeal !== recipe.idMeal
        )

        setFavorites(newFavorites)
    }

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Layout />}>

                    <Route
                        index
                        element={
                            <Homepage
                                favorites={favorites}
                                addFavorite={addFavorite}
                            />
                        }
                    />

                   <Route
                            path="/recipe/:recipe_id"
                            element={
                                <Recipeview
                                    favorites={favorites}
                                    addFavorite={addFavorite}
                                    removeFavorite={removeFavorite}
                                />
                            }
                        />

                    <Route
                        path="/favorites"
                        element={
                            <Favorites
                                favorites={favorites}
                                removeFavorite={removeFavorite}
                            />
                        }
                    />

                </Route>

            </Routes>

        </BrowserRouter>
    )
}

export default MyRoute