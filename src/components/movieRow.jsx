import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "./axios"

const baseURL = "https://image.tmdb.org/t/p/original"

function movieRow({title, fetchURL, setMovie}) {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchURL])
 
function backdropChange(info){
  setMovie(info)
}

  return (
    <div className="px-10">
      <h1 className="text-2xl font-bold pt-3">{title}</h1>
      <div className="hideScrollbar flex gap-3 overflow-scroll py-3 px-3">
        {
          movies.map(movie => (
            <img 
              src={`${baseURL}${movie.poster_path}`}
              className="w-[125px] rounded-md hover:scale-110 duration-300"
              key={movie.id}
              onClick={() => backdropChange(movie)}
              onLoad = {() => backdropChange(movie)}
            />
          ))
        }

      </div>
    </div>
  )
}

export default movieRow
