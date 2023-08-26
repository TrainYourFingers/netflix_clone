import React, {useEffect} from "react"
import Sidebar from "./Sidebar"
import Search from "./components/search"
import Home from "./components/home"
import Events from "./components/events"
import Cast from "./components/cast"
import Movie from "./components/movie"
import Add from "./components/add"
import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <div className="w-screen relative overflow-x-hidden bg-black m-0 p-0 flex">
      <Sidebar />
      <div className="h-screen w-full relative">
            <a 
                href="#"
                className="absolute top-4 right-4">
                    <img 
                        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
                        width="200" alt="netflix logo" />
            </a>
            
            <Routes>
                <Route exact path="/search" element={<Search />}/>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/events" element={<Events />}/>
                <Route exact path="/cast" element={<Cast />} />
                <Route exact path="/movie" element={<Movie />} />
                <Route exact path="/add" element={<Add />} />
            </Routes>
            
        </div>
    </div>
  )
}

