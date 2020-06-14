import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import MovieDetail from "./MovieDetail";
import Movie from "./Movie";

const User = ({history}) => {
  const [myList, setMyList] = useState([]);
  const [openModal, setOpenModal] = useState(0);

  useEffect(()=>{
    if(localStorage.getItem('watch')){
      const list = localStorage.getItem('watch');
      setMyList(JSON.parse(list));
    }
  },[]);

  return(
    <div className="user">
      <header className="header">
        <div className="icons">
          <Link to="/"><button>main</button></Link>
          <Link to="/movies"><button>movies</button></Link>
        </div>
        <div className="main_tit">MY WATCH LIST</div>
      </header>
      <section className="my">
        <table className="my_list">
          {/*<caption>my watch list</caption>*/}
          <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>RELEASE DATE</th>
          </tr>
          </thead>
          <tbody>
          {myList.map(v=>{
            return(
              <tr key={v.id} onClick={()=>setOpenModal(v.id)}>
                <td>{v.id}</td>
                <td>{v.title}</td>
                <td>{v.date}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </section>
      {openModal !== 0 && <MovieDetail id={openModal} onSubmit={setOpenModal}/>}
    </div>
  )
}

export default User