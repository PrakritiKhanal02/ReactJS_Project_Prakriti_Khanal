const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

export const searchByName = async (name) => {

    const response = await fetch(
        `${BASE_URL}/search.php?s=${name}`
    )

    const data = await response.json()

    return data.meals || []
}

export const searchByIngredient = async (ingredient) => {

    const response = await fetch(
        `${BASE_URL}/filter.php?i=${ingredient}`
    )

    const data = await response.json()

    return data.meals || []
}

export const getRecipeById = async (id) => {

    const response = await fetch(
        `${BASE_URL}/lookup.php?i=${id}`
    )

    const data = await response.json()

    if (data.meals) {
        return data.meals[0]
    }

    return null
}

export const getCategories = async () => {

    const response = await fetch(
        `${BASE_URL}/categories.php`
    )

    const data = await response.json()

    return data.categories || []
}

export const searchByCategory = async (category) => {

    const response = await fetch(
        `${BASE_URL}/filter.php?c=${category}`
    )

    const data = await response.json()

    return data.meals || []
}