
import { createContext, useState, useEffect, useContext } from "react"
import PropTypes from 'prop-types'

const MovieContext = createContext()
export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favs, setFavs] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites") 
        if (storedFavs) setFavs(JSON.parse(storedFavs)) //check for any favs in local storage
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favs)) //update the favs in local storage in string format
    }, [favs])

    // add the movie to the favs array
    const addToFavs = (movie) => {
        setFavs(prev => [...prev, movie])
    }
    // remove the movie from the favs array
    const removeFromFavs = (movieId) => {
        setFavs(prev => prev.filter(movie => movie.Id !== movieId))
    }
    // check if the movie is in the favs array
    const isFavorite = (movieId) => {
        return favs.some(movie => movie.id === movieId)
    }
    
    MovieProvider.propTypes = {
        children: PropTypes.node.isRequired
    }
    
    const value = {
        favs,
        addToFavs,
        removeFromFavs,
        isFavorite
    }

    return (
    <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
    )
}