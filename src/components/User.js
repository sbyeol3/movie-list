import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return(
    <div className="user">
      <header className="header">
        <div className="icons">
          <Link to="/"><button>main</button></Link>
          <Link to="/user"><button>my list</button></Link>
        </div>
        <div className="main_tit">MY WATCH LIST</div>
      </header>
    </div>
  )
}

export default User