import React from 'react'
import { Link } from 'react-router-dom'
import Movie from "./Movie";

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
      <section className="my">
        <ul className="list">
          {localStorage.getItem('watch') &&
          localStorage.getItem('watch').split(',').map((v)=>{
            console.log(v)
            // return <li key={v.id}><Movie {...v}/></li>;
          })}
        </ul>
      </section>
    </div>
  )
}

export default User