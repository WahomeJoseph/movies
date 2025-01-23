/* eslint-disable no-unused-vars */
import React from 'react'

export const Moviecard = ({movie}) => {

  return (
    <div className='flex flex-col relative bg-red-600 h-screen transition transform duration-200 overflow-hidden text-base md:text-sm'>
        <div className='bg-blend-color-dodge'>
            <img src="" alt="movie-thumb" />
            <div className='absolute flex flex-col justify-end inset-0 bg-[#000] opacity-0 transition-opacity duration-200 p-4'>
                <button onClick={handleFav} className='bg-cyan-400 blur-lg'></button>
            </div>
        </div>
        <div className=''>
            <h3>{movie.name}</h3>
            <span>{movie.release_date?.split('-') [0]}</span>
        </div>

    </div>
  )
}
