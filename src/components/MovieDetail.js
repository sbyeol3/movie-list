import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import {fetchDetail} from './data'

const MovieDetail = (props) => {
  const {match} = props;
  const {params: {id}} = match;
  const [detail, setDetail] = useState({});

  useEffect(()=>{
    fetchDetail(id).then(({results}) => setDetail(results));
  },[id])
  return(
    <div>
      <div>Movie Detail</div>
    </div>
  )
}

export default MovieDetail