import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getRecipeById } from '../api/mealdb'
import StatusMessage from '../components/StatusMessage'

const Recipeview = (props) => {

    const params = useParams()

    let recipe_id = params.recipe_id

    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        getRecipeById(recipe_id)
            .then((result) => {
                setRecipe(result)
                setLoading(false)
            })
            .catch((error) => {
                console.log("Error in fetching recipe", error)
                setLoading(false)
            })

    }, [recipe_id])

    if (loading) {
        return (
            <StatusMessage
                variant="loading"
                title="Loading recipe..."
            />
        )
    }

    if (!recipe) {
        return (
            <StatusMessage
                variant="empty"
                title="Recipe not found."
            >
                <Link to="/" className="btn btn-primary mt-3">
                    Back to Home
                </Link>
            </StatusMessage>
        )
    }

    const isFavorite = props.favorites.some(
        (item) => item.idMeal === recipe.idMeal
    )

    const favoriteRecipe = () => {
        if (isFavorite) {
            props.removeFavorite(recipe)
        }
        else {
            props.addFavorite(recipe)
        }
    }

    return (
        <>

            <div className="container my-5">

                <Link
                    to="/"
                    className="text-decoration-none text-muted"
                >
                    ← Back to Home
                </Link>

                <div className="row mt-4 shadow rounded-4 p-4 recipe-details">

                    <div className="col-md-5">

                        <div className="recipe-image">

                            <img
                                src={recipe.strMealThumb}
                                alt={recipe.strMeal}
                                className="img-fluid rounded-4"
                            />

                            <button
                                className={
                                    isFavorite
                                        ? 'favorite-button saved'
                                        : 'favorite-button'
                                }
                                onClick={favoriteRecipe}
                            >
                                {isFavorite ? '★' : '☆'}
                            </button>

                        </div>

                    </div>

                    <div className="col-md-7">

                        <h1 className="fw-bold">
                            {recipe.strMeal}
                        </h1>

                        <p className="text-muted">
                            {recipe.strCategory} · {recipe.strArea}
                        </p>

                        <hr />

                        <h3>Ingredients</h3>

                        <ul>

                            {
                                Array.from({ length: 20 }, (_, index) => {

                                    const number = index + 1

                                    const ingredient = recipe[`strIngredient${number}`]
                                    const measure = recipe[`strMeasure${number}`]

                                    if (ingredient && ingredient.trim() !== '') {

                                        return (
                                            <li key={number}>
                                                {measure} {ingredient}
                                            </li>
                                        )
                                    }

                                    return null

                                })
                            }

                        </ul>

                    </div>

                </div>

                <div className="mt-5">

                    <h2>Instructions</h2>

                    <div className="instructions shadow-sm rounded-4 p-4">

                        <p>
                            {recipe.strInstructions}
                        </p>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Recipeview