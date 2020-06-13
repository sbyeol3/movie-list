import React from 'react'
import axios from 'axios'
import { URL, API_KEY, GENRE_URL } from "../config";

export async function fetchMovies(page) {
  const request = {
    method: 'GET',
    url: URL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: {
      api_key: API_KEY,
      page
    }
  };
  try {
    const response = await axios(request);
    const { data } = response
    return data
  } catch (e) {
    console.log(e)
  }
}

export async function fetchGenres() {
  const request = {
    method: 'GET',
    url: GENRE_URL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: {
      api_key: API_KEY,
    }
  };
  try {
    const response = await axios(request);
    const { data } = response
    return data
  } catch (e) {
    console.log(e)
  }
}