import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {

    let favoriteIcon = '☆'
    let favoriteClass = 'favorite-button'

    if (props.isFavorite) {
        favoriteIcon = '★'
        favoriteClass = 'favorite-button saved'
    }

    return (
        <>
            <div className="col">

                <div className="card recipe-card h-100 shadow-sm">

                    <div className="recipe-image">

                        <img
                            src={props.data.strMealThumb}
                            className="card-img-top"
                            alt={props.data.strMeal}
                        />

                        <button
                            className={favoriteClass}
                            onClick={() => props.onFavorite(props.data)}
                        >
                            {favoriteIcon}
                        </button>

                    </div>

                    <div className="card-body">

                        <h5 className="card-title">
                            {props.data.strMeal}
                        </h5>

                        <p className="card-text text-muted">
                            Delicious recipe to try at home.
                        </p>

                        <Link
                            to={`/recipe/${props.data.idMeal}`}
                            className="btn btn-primary"
                        >
                            View Recipe
                        </Link>

                    </div>

                </div>

            </div>
        </>
    )
}

export default RecipeCard