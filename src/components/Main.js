import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default () => {
  return(
    <div className="main">
      <div className="main_tit">Watch Movies!</div>
      <div className="btn-list">
        <Link to='/movies'><button className="btn">Upcoming Movies</button></Link>
        <Link to='/user'><button className="btn">My Watch List</button></Link>
      </div>
    </div>
  )
}