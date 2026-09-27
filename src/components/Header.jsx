import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <>
      <header className="px-4">

        <nav className="navbar navbar-expand-lg">

          <div className="container-fluid">

            <Link className="navbar-brand text-white fw-bold" to="/">
            <img src="/logo.jpg" alt="Logo" width={"50px"} />
            </Link>

            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarScroll"
            >

              <ul className="navbar-nav m-auto">

                <li className="nav-item">
                  <Link className="nav-link text-orange" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-orange" to="/favorites">
                    Favorites
                  </Link>
                </li>

              </ul>

            </div>

          </div>

        </nav>

      </header>
    </>
  )
}

export default Header