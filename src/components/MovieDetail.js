import React, {useState, useEffect} from 'react'
import './style.css'
import {fetchDetail} from './data'
import {covert_path} from "./Movie";

const MovieDetail = (props) => {
  const {id, onSubmit, deleteItem} = props;
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetchDetail(id).then((results) => setDetail(results));
  }, [id]);

  return (
    <div className="modal" >
      <div className="modal-content">
        <div className="top">
          <div className="modal-tit" onClick={() => onSubmit(0)}>&lt; back</div>
          <div className="empty"/>
          <button className="delete" onClick={()=>deleteItem(id)}>Delete</button>
        </div>
        {detail && (
          <div className="contents">
            <div className="title">{detail.original_title} ({detail.release_date}) </div>
            <div className="flex-box">
              <img className="poster" src={covert_path(detail.poster_path)} alt="poster"/>
              <div className="info">
                <div className="runtime">running time : {detail.runtime} min</div>
                <div className="overview">{detail.overview}</div>
                <div className="genres">
                  {detail.genres && detail.genres.map(v=>{
                    return <span className="genre">{v.name}</span>
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
};

export default MovieDetail;