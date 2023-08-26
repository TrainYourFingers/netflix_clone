import React from "react"
import { NavLink } from "react-router-dom"

export default function Sidebar(){

const activeLink = ({isActive}) => {
    return{
        color: isActive ? 'white' : null,
        borderLeft : isActive ? '2px red solid' : null
    }
} 

    return(
        <div className="w-16 h-screen sticky left-0 top-0 bg-neutral-900">
            <div className="iconHolder h-full flex flex-col justify-center place-items-center">
                    <NavLink style={activeLink} to="/search" className="py-4 flex justify-center w-full border-l-2 border-neutral-900 text-neutral-600 hover:border-red-600 hover:text-neutral-400">
                        <span className="material-symbols-outlined ">search</span>
                    </NavLink>
                    <NavLink style={activeLink} to="/" className="py-4 flex justify-center w-full border-l-2 border-neutral-900 text-neutral-600 hover:border-red-600 hover:text-neutral-400">
                        <span className="material-symbols-outlined ">house</span>
                    </NavLink>
                    <NavLink style={activeLink} to="/events" className="py-4 flex justify-center w-full border-l-2 border-neutral-900 text-neutral-600 hover:border-red-600 hover:text-neutral-400">
                        <span className="material-symbols-outlined ">calendar_month</span>
                    </NavLink>
                    <NavLink style={activeLink} to="/cast" className="py-4 flex justify-center w-full border-l-2 border-neutral-900 text-neutral-600 hover:border-red-600 hover:text-neutral-400">
                        <span className="material-symbols-outlined ">cast</span>
                    </NavLink>
                    <NavLink style={activeLink} to="/movie" className="py-4 flex justify-center w-full border-l-2 border-neutral-900 text-neutral-600 hover:border-red-600 hover:text-neutral-400">
                        <span className="material-symbols-outlined ">movie</span>
                    </NavLink>
                    <NavLink style={activeLink} to="/add" className="py-4 flex justify-center w-full border-l-2 border-neutral-900 text-neutral-600 hover:border-red-600 hover:text-neutral-400">
                        <span className="material-symbols-outlined ">add</span>
                    </NavLink>
            </div>
        </div>
    )
}