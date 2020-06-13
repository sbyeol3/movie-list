import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {fetchGenres, fetchMovies, getHost} from "./data";
import Movie from "./Movie";
import './style.css';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [addList, setAddList] = useState(localStorage.getItem('watch') !== null ?
    localStorage.getItem('watch').split(',') : []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const add = (id) => {
    if(!addList.includes(id))
      setAddList([id,...addList])
    else setAddList(addList.filter(v => v !== id));
  }

  const infiniteScroll = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;

    if(-1 < scrollTop + clientHeight - scrollHeight && scrollTop + clientHeight - scrollHeight < 1){
      setPage(prev => prev + 1)
    }

  }

  useEffect(()=>{
    console.log(addList)
    localStorage.setItem('watch',addList.join(','))
  },[addList])

  useEffect(()=>{
    fetchMovies(1).then(({results}) => setMovieList(results));
    fetchGenres().then(({results}) => setGenreList(results));
    window.addEventListener('scroll', infiniteScroll, true)
    getHost()
  },[]);

  useEffect(()=> {
    if (page !== 1)
      fetchMovies(page).then(({results}) => {
        setMovieList(movieList.concat(results))
        if (results.total_pages <= page) window.removeEventListener('scroll',infiniteScroll)
      });
  },[page])

  return(
    <div className="upcoming">
      <header className="header">
        <div className="icons">
          <Link to="/"><button>main</button></Link>
          <Link to="/user"><button>my list</button></Link>
        </div>
        <div className="main_tit">UPCOMING MOVIES!</div>
      </header>
      <section>
        <ul className="list">
          {movieList && movieList.length === 0 && <div>No results</div>}
          {movieList && movieList.length > 0 && movieList.map((v)=>{
            return <li key={v.id}><Movie onSubmit={add} {...v}/></li>;
          })}
        </ul>
      </section>
      <div className="pagination">

      </div>
    </div>
  )
}