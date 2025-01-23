import React from 'react'

export const Moviecard = ({movie}) => {

  return (
    <div className='flex'>
        <div className=''>
            <img src="" alt="movie-thumb" />
            <div className=''>
                <button onClick={handleFav} className=''></button>
            </div>
        </div>

        <div className=''>
            <h3>{movie.name}</h3>
            <span>{movie.release_date?.split('-') [0]}</span>
        </div>

    </div>
  )
}
