import React, { useState } from 'react'

const SearchBar = (props) => {

    const [search, setSearch] = useState('')
    const [searchType, setSearchType] = useState('name')

    const searchRecipe = (event) => {

        event.preventDefault()

        if (search.trim() !== '') {
            props.onSearch(search, searchType)
        }

    }

    return (
        <>

            <form onSubmit={searchRecipe}>

                <div className="input-group">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search recipes..."
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />

                    <button className="btn btn-primary">
                        Search
                    </button>

                </div>

                <div className="text-center mt-3">

                    <button
                        type="button"
                        className={
                            searchType === 'name'
                                ? 'btn btn-primary me-2'
                                : 'btn btn-outline-primary me-2'
                        }
                        onClick={() => setSearchType('name')}
                    >
                        By Name
                    </button>

                    <button
                        type="button"
                        className={
                            searchType === 'ingredient'
                                ? 'btn btn-primary'
                                : 'btn btn-outline-primary'
                        }
                        onClick={() => setSearchType('ingredient')}
                    >
                        By Ingredient
                    </button>

                </div>

            </form>

        </>
    )
}

export default SearchBar