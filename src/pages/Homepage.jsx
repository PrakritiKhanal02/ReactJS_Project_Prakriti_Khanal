import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import RecipeCard from '../components/RecipeCard'
import StatusMessage from '../components/StatusMessage'
import {
    searchByName,
    searchByIngredient,
    
} from '../api/mealdb'

const Homepage = (props) => {

    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(false)
    const [searched, setSearched] = useState(false)

    const searchRecipe = async (search, searchType) => {

        setLoading(true)
        setSearched(true)

        let result = []

        if (searchType === 'name') {
            result = await searchByName(search)
        }
        else {
            result = await searchByIngredient(search)
        }

        setRecipes(result)
        setLoading(false)
    }

   

    return (
        <>
            <div className="banner" id="banner">
                <div
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="2000"
                >
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src="/banner.jpg" className="d-block w-100" alt="Banner 1" />
                        </div>

                    </div>

                </div>
            </div>

            <div className="container my-5">

                <div className="text-center">

                    <h1 className="display-4 fw-bold">
                        What are you cooking today?
                    </h1>

                    <p className="lead">
                        Search delicious recipes by name or ingredient.
                    </p>

                </div>

                <div className="col-md-8 mx-auto mt-4">

                    <SearchBar onSearch={searchRecipe} />

                </div>

                

                {loading && (
                    <StatusMessage
                        variant="loading"
                        title="Searching for recipes..."
                    />
                )}

                {!loading && searched && recipes.length === 0 && (
                    <StatusMessage
                        variant="empty"
                        title="No recipes found."
                    />
                )}

                {!loading && recipes.length > 0 && (

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">

                        {
                            recipes.map((item) => (

                                <RecipeCard
                                    data={item}
                                    key={item.idMeal}
                                    isFavorite={props.favorites.some(
                                        (favorite) =>
                                            favorite.idMeal === item.idMeal
                                    )}
                                    onFavorite={props.addFavorite}
                                />

                            ))
                        }

                    </div>

                )}

            </div>

        </>
    )
}

export default Homepage