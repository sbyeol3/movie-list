import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {fetchGenres, fetchMovies} from "./data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Movie from "./Movie";
import './style.css';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [addList, setAddList] = useState(localStorage.getItem('watch') !== null ?
    JSON.parse(localStorage.getItem('watch')) : []);
  const [page, setPage] = useState(1);

  const add = (id,title,date) => {
    for (let i=0;i<addList.length;i++){
      if(addList[i].id === id)
        return toast.error(`📦 <${title}>는 이미 담겨있어요!`);
    }
    toast.dark(`📨 <${title}> Watch List에 담았어요!`);
    const newList = [{id,title,date},...addList]
    newList.sort(function(a, b) {
      const A = new Date(a.date)
      const B = new Date(b.date)
      return B - A;
    });
    setAddList(newList)
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
    localStorage.setItem('watch',JSON.stringify(addList))
  },[addList])

  useEffect(()=>{
    fetchMovies(1).then(({results}) => setMovieList(results));
    fetchGenres().then(({results}) => setGenreList(results));
    window.addEventListener('scroll', infiniteScroll, true)
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
        <ToastContainer/>
        <ul className="list">
          {movieList && movieList.length === 0 && <div>No results</div>}
          {movieList && movieList.length > 0 && movieList.map((v)=>{
            return <li key={v.id}><Movie genre={genreList} onSubmit={add} {...v}/></li>;
          })}
        </ul>
      </section>
      <div className="pagination">

      </div>
    </div>
  )
}