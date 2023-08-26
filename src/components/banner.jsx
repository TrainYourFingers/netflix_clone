import React, { useState } from 'react'

function Banner(props) {

function handleTrailer(movie){
    console.log(movie)
    console.log(movie.name || movie.title || movie.original_name || movie.original_title)
}

  return (
        <div className="posterHolder h-[30rem] w-full bg-white" style={{backgroundImage : `url("https://image.tmdb.org/t/p/original${props.movie.backdrop_path}")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}}>
            <div className="h-full w-full bg-gradient-to-r from-black to-transparent">
                <div className="aboutMovie h-full flex flex-col justify-center pl-16">
                    <h1 className="text-4xl w-1/2 font-bold text-white py-2">{props.movie.original_name || props.movie.name || props.movie.title || props.movie.original_title}</h1>
                    <div className="flex w-max py-2"><h1 className="flex justify-center place-items-center text-base text-yellow-400">{props.movie.vote_average}&nbsp;<span className="material-symbols-outlined text-sm">star</span></h1><h1 className="text-base mx-2">{props.movie.release_date || props.movie.first_air_date}</h1></div>
                    <h1 className="w-1/3 max-h-1/3 overflow-hidden py-2 text-neutral-400">
                        {props.movie.overview}
                    </h1>
                    <div className="flex py-2">
                        <button onClick={() => handleTrailer(props.movie)} className="flex justify-center place-items-center px-3 py-3 mx-2 rounded-md text-xl font-semibold bg-red-600 opacity-75 hover:opacity-100 hover:brightness-125"><span className="material-symbols-outlined">play_arrow</span>Play</button>
                        <button className="flex justify-center place-items-center px-3 py-3 mx-2 rounded-md text-xl font-semibold bg-zinc-600 opacity-75 hover:opacity-100 hover:brightness-125"><span className="material-symbols-outlined">add</span>My List</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Banner
