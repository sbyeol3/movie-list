import React from 'react';
import './style.css';

export function covert_path(path) {
  return 'https://image.tmdb.org/t/p/w200/'+path
}

function filter(text) {
  return text.length > 200? text.substring(0,200)+ '...' : text
}

const Movie = (props) => {
  const { id, title, vote_average, overview, release_date, poster_path } = props;
  const { onSubmit } = props;

  const path = covert_path(poster_path)
  return(
    <div onClick={()=>onSubmit(id.toString(),title,release_date)} className="movie">
      <div className="top">
        <div className="title">{title}</div>
        <div className="vote_average">{vote_average}</div>
      </div>
      <div className="poster">
        <img src={path} alt={title} />
      </div>
      <div className="contents">
        <div className="overview">
          {filter(overview)}
          {overview.length > 200 &&
          <span tooltip={overview} className="more">more</span>}
        </div>
        <div className="date">{release_date}</div>
      </div>
    </div>
  )
};

export default Movie