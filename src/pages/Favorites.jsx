import React from 'react'
import RecipeCard from '../components/RecipeCard'

const Favorites = (props) => {

    return (
        <>

            <div className="container my-5">

               
                {
                    props.favorites.length === 0 ?

                        <div className="text-center">

                            <h3>No favorite recipes yet.</h3>

                            <p className="text-muted">
                                Search for a recipe and click the ☆ icon
                                to save it.
                            </p>

                        </div>

                        :

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                            {
                                props.favorites.map((item) => (

                                    <RecipeCard
                                        data={item}
                                        key={item.idMeal}
                                        isFavorite={true}
                                        onFavorite={props.removeFavorite}
                                    />

                                ))
                            }

                        </div>
                }

            </div>

        </>
    )
}

export default Favorites